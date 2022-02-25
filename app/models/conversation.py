from .db import db



class Conversation(db.Model):
    __tablename__ = 'conversations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    conversation_name = db.Column(db.String(100), nullable=False)

    user = db.relationship('User', back_populates='conversations')
    chats = db.relationship('Chat', back_populates='conversation', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict(),
            'conversation_name': self.conversation_name
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'user': self.user.to_JSON(),
            'conversationName': self.conversation_name
        }
