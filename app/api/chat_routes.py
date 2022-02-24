from datetime import datetime
from flask import Blueprint, jsonify, make_response, request
from app.models import db, Chat

chat_routes = Blueprint('chats', __name__)

@chat_routes.route('/', methods=['GET'])
def get_chats():
    chats = db.session.query(Chat).filter(Chat.convo_id == request.json['convo_id']).all()
    return {'chats': [chat.to_dict() for chat in chats]}

@chat_routes.route('/', methods=['POST'])
def post_chat():
    chat = Chat(
        convo_id=request.json['convo_id'],
        user_id=request.json['user_id'],
        message=request.json['message'],
        created_at=datetime.utcnow()
    )
    try:
        db.session.add(chat)
        db.session.commit()
        return jsonify(chat.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the chat occurred']}, 400)
