from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


followers = db.Table(
    'followers',
    db.Column('following_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('follower_id', db.Integer, db.ForeignKey('users.id'))
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_pic_url = db.Column(db.String)

    follow = db.relationship('User',
                             secondary=followers,
                             primaryjoin=(followers.c.following_id == id),
                             secondaryjoin=(followers.c.follower_id == id),
                             backref='user')
    # follow = db.relationship('Follow', back_populates='user')
    scrap = db.relationship('Scrap', back_populates='user')
    comment = db.relationship('Comment', back_populates='user')
    like = db.relationship('Like', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_pic_url': self.profile_pic_url
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profilePicURL': self.profile_pic_url
        }
