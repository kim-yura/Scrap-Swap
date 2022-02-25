from flask import Blueprint, jsonify, make_response, request
from app.models import db, Chat
from datetime import datetime

chat_routes = Blueprint('chats', __name__)

@chat_routes.route('/', methods=['GET'])
def get_chats():
    chats = Chat.query.all()
    return jsonify([chat.to_JSON() for chat in chats])

@chat_routes.route('/', methods=['POST'])
def create_chat():
    chat = Chat(
        conversation_id=request.json['conversation_id'],
        user_id=request.json['user_id'],
        chat_content=request.json['chat_content'],
        created_at=datetime.utcnow()
    )
    try:
        db.session.add(chat)
        db.session.commit()
        return jsonify(chat.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the chat occurred']})
