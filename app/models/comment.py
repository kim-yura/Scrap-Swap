from .db import db
from datetime import datetime


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    scrap_id = db.Column(db.Integer, db.ForeignKey('scraps.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    reply = db.Column(db.Integer)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    scrap = db.relationship('Scrap', back_populates='comment')
    user = db.relationship('User', back_populates='comment')
    like = db.relationship('Like', back_populates='comment')

    def to_dict(self):
        return {
            'id': self.id,
            'scrap_id': self.scrap_id,
            'user_id': self.user_id,
            'reply': self.reply,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'scrapId': self.scrap_id,
            'userId': self.user_id,
            'reply': self.reply,
            'content': self.content,
            'user': self.user.to_JSON(),
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
