from .db import db
from datetime import datetime


class Scrap(db.Model):
    __tablename__ = 'scraps'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(50), nullable=False)
    image_url = db.Column(db.String)
    yarn_weight_id = db.Column(db.Integer, db.ForeignKey('yarn_weights.id'), nullable=False)
    fiber_content = db.Column(db.String(50), nullable=False)
    yardage = db.Column(db.Integer, nullable=False)
    allergens = db.Column(db.Text)
    swap_target_id = db.Column(db.Integer, db.ForeignKey('swap_targets.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship('User', back_populates='scrap')
    yarn_weight = db.relationship('YarnWeight', back_populates='scrap')
    swap_target = db.relationship('SwapTarget', back_populates='scrap')
    comment = db.relationship('Comment', back_populates='scrap', cascade='all, delete-orphan')
    like = db.relationship('Like', back_populates='scrap')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'image_url': self.image_url,
            'yarn_weight_id': self.yarn_weight_id,
            'fiber_content': self.fiber_content,
            'yardage': self.yardage,
            'allergens': self.allergens,
            'swap_target_id': self.swap_target_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'title': self.title,
            'imageURL': self.image_url,
            'yarnWeightId': self.yarn_weight_id,
            'fiberContent': self.fiber_content,
            'yardage': self.yardage,
            'allergens': self.allergens,
            'swapTargetId': self.swap_target_id,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
