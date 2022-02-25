from datetime import datetime
from .db import db


class Chat(db.Model):
    __tablename__ = 'chats'

    id = db.Column(db.Integer, primary_key=True)
    conversation_id = db.Column(db.Integer, db.ForeignKey('conversations.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    chat_content = db.Column(db.String(500), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())

    user = db.relationship('User', back_populates='chats')
    conversation = db.relationship('Conversation', back_populates='chats')

    def to_dict(self):
        return {
            'id': self.id,
            'conversation_id': self.conversation_id,
            'conversation': self.conversation.to_dict(),
            'user_id': self.user_id,
            'user': self.user.to_dict(),
            'chat_content': self.chat_content,
            'created_at': self.created_at
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'conversationId': self.conversation_id,
            'conversation': self.conversation.to_JSON(),
            'userId': self.user_id,
            'user': self.user.to_JSON(),
            'chatContent': self.chat_content,
            'createdAt': self.created_at
        }
