from .db import db


class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    following_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    follower_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='follow')

    @property
    def following(self):
        return self.following_id

    @property
    def follower(self):
        return self.follower_id

    def to_dict(self):
        return {
            'id': self.id,
            'following_id': self.following_id,
            'follower_id': self.follower_id
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'followingId': self.following_id,
            'followerId': self.follower_id
        }
