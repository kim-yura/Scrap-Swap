from .db import db
from datetime import datetime


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    scrap_id = db.Column(db.Integer, db.ForeignKey('scraps.id'))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship('User', back_populates='like')
    scrap = db.relationship('Scrap', back_populates='like')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'scrap_id': self.scrap_id,
            'created_at': self.created_at
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'scrapId': self.scrap_id,
            'createdAt': self.created_at
        }
