from datetime import datetime
from flask import Blueprint, jsonify, make_response, request
from app.models import db, Chat

chat_routes = Blueprint('chats', __name__)

@chat_routes.route('/', methods=['GET'])
def get_chats():
    chats = Chat.query.all()
    return {'chats': [chat.to_dict() for chat in chats]}

@chat_routes.route('/<int:id>', methods=['GET'])
def get_users_convos():
    convos = Chat.query.all().filter(request.json['session_user_id'] in Chat.convo_id).all()
    return {'convos': [convo.convo_id for convo in convos]}

@chat_routes.route('/', methods=['POST'])
def post_chat():
    chat = Chat(
        convo_id=request.json['convoId'],
        user_id=request.json['userId'],
        message=request.json['message'],
        created_at=datetime.utcnow()
    )
    print(chat)
    try:
        db.session.add(chat)
        db.session.commit()
        return jsonify(chat.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the chat occurred']}, 400)
