from datetime import datetime
from flask import Blueprint, jsonify, make_response, request
from app.models import db, Like

like_routes = Blueprint('likes', __name__)


@like_routes.route('/', methods=['GET'])
def get_likes():
    likes = Like.query.all()
    return jsonify([like.to_JSON() for like in likes])

@like_routes.route('/', methods=['POST'])
def post_like():
    like = Like(
        user_id=request.json['user_id'],
        scrap_id=request.json['scrap_id'],
        created_at=datetime.now()
        )
    try:
        db.session.add(like)
        db.session.commit()
        return jsonify(like.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the like occurred']})

@like_routes.route('/', methods=['DELETE'])
def delete_like():
    like_id = request.json['id']
    like = Like.query.get(like_id)
    if like:
        db.session.delete(like)
        db.session.commit()
        return jsonify({'errors': False})
    else:
        return make_response({'errors': ['Delete on non-existent like']}, 404)
