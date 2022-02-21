from flask import Blueprint, jsonify, make_response, request
from flask_login import login_required
from app.models import db, User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    if user:
        return user.to_dict()
    else:
        return {'user': ''}


@user_routes.route('/', methods=['PUT'])
def put_user():
    db.session.query(User).filter(User.id == request.json['id']).update({
        'username': request.json['username'],
        'profile_pic_url': request.json['profile_pic_url'],
        'bio': request.json['bio']
    }, synchronize_session='fetch')
    db.session.commit()
    user = User.query.get(request.json['id'])
    if user:
        return jsonify(user.to_JSON())
    else:
        return make_response({'errors': ['Edit on non-existant user']}, 404)


@user_routes.route('/follow', methods=['POST'])
@login_required
def follow_user():
    follower_id=request.json['follower_id']
    following_id=request.json['following_id']
    follower = User.query.get(follower_id)
    following = User.query.get(following_id)
    follower.following.append(following)
    db.session.commit()
    return jsonify(follower.to_JSON())

@user_routes.route('/unfollow', methods=['DELETE'])
@login_required
def unfollow_user():
    follower_id=request.json['follower_id']
    following_id=request.json['following_id']
    follower = User.query.get(follower_id)
    following = User.query.get(following_id)
    follower.following.remove(following)
    db.session.commit()
    return jsonify(follower.to_JSON())
