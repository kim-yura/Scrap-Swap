from flask import Blueprint, jsonify, make_response, request
from app.models import db, Conversation

conversation_routes = Blueprint('conversations', __name__)

@conversation_routes.route('/', methods=['GET'])
def get_conversations():
    conversations = Conversation.query.all()
    return jsonify([conversation.to_JSON() for conversation in conversations])

@conversation_routes.route('/<int:conversationId>', methods=['GET'])
def get_conversation(conversationId):
    conversation = Conversation.query.get(conversationId)
    return conversation.to_JSON()

@conversation_routes.route('/', methods=['POST'])
def create_conversation():
    conversation_name = request.json['conversation_name']
    conversation = Conversation.query.filter(Conversation.conversation_name == conversation_name)
    if conversation:
        return make_response({'errors': ['Conversation already exists']})
    else:
        participants = conversation_name.split('%')
        conversation_1 = Conversation(
            user_id = participants[0],
            conversation_name = conversation_name
        )
        conversation_2 = Conversation(
            user_id = participants[1],
            conversation_name = conversation_name
        )
        try:
            db.session.add(conversation_1)
            db.session.add(conversation_2)
            db.session.commit()
            return jsonify(conversation_1.to_JSON())
        except:
            return make_response({f'errors': ['Error(s) on the conversation occurred']})
