from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


follows = db.Table(
    "follows",
    db.Column("follower_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("following_id", db.Integer, db.ForeignKey("users.id"))
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_pic_url = db.Column(db.String, default='https://scrapswap.s3.amazonaws.com/logo_whitespace.png')
    bio = db.Column(db.Text, default='Just a yarny on the internet.')

    followers = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.follower_id == id),
        secondaryjoin=(follows.c.following_id == id),
        backref=db.backref("following", lazy="dynamic"),
        lazy="dynamic"
    )

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
            'profile_pic_url': self.profile_pic_url,
            'bio': self.bio,
            'followers': [follower.id for follower in self.followers],
            'following': [follow.id for follow in self.following],
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_pic_url': self.profile_pic_url,
            'bio': self.bio,
            'followers': [follower.id for follower in self.followers],
            'following': [following.id for following in self.following]
        }
