from datetime import datetime
from flask import Blueprint, jsonify, make_response, request
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/', methods=['GET'])
def get_comments():
    comments = Comment.query.all()
    return jsonify([comment.to_JSON() for comment in comments])

@comment_routes.route('/', methods=['POST'])
def post_comment():
    comment = Comment(
        scrap_id=request.json['scrap_id'],
        user_id=request.json['user_id'],
        reply=request.json['reply'],
        content=request.json['content'],
        created_at=datetime.now(),
        updated_at=datetime.now()
        )
    try:
        db.session.add(comment)
        db.session.commit()
        return jsonify(comment.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the comment occurred']})

@comment_routes.route('/', methods=['PUT'])
def put_comment():
    db.session.query(Comment).filter(Comment.id == request.json['id']).update({
        'content': request.json['content'],
        'updated_at': datetime.now()
    }, synchronize_session='fetch')
    db.session.commit()
    comment = Comment.query.get(request.json['id'])
    if comment:
        return jsonify(comment.to_JSON())
    else:
        return make_response({'errors': ['Edit on non-existent comment']}, 404)

@comment_routes.route('/', methods=['DELETE'])
def delete_comment():
    comment_id = request.json['id']
    comment = Comment.query.get(comment_id)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return jsonify({'errors': False})
    else:
        return make_response({'errors': ['Delete on non-existent comment']}, 404)
