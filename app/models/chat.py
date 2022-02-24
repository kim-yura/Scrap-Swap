from .db import db
from datetime import datetime

class Chat(db.Model):
    __tablename__ = 'chats'

    id = db.Column(db.Integer, primary_key=True)
    convo_id = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())

    user = db.relationship('User', back_populates='chat')

    def to_dict(self):
        created_at = self.created_at.strftime('%m/%d/%Y at %I:%M:%S%p')

        return {
            'id': self.id,
            'convo_id': self.convo_id,
            'user_id': self.user_id,
            'message': self.message,
            'user': self.user.to_dict(),
            'created_at': created_at
        }

    def to_JSON(self):
        created_at = self.created_at.strftime('%m/%d/%Y at %I:%M:%S%p')

        return {
            'id': self.id,
            'convoId': self.convo_id,
            'userId': self.user_id,
            'message': self.message,
            'user': self.user.to_JSON(),
            'createdAt': created_at
        }
