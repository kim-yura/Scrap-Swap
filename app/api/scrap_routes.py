from datetime import datetime
from flask import Blueprint, jsonify, make_response, request
from app.models import db, Scrap

scrap_routes = Blueprint('scraps', __name__)


@scrap_routes.route('/', methods=['GET'])
def get_scraps():
    scraps = Scrap.query.all()
    return jsonify([scrap.to_JSON() for scrap in scraps])

@scrap_routes.route('/', methods=['POST'])
def post_scrap():
    scrap = Scrap(
        user_id=request.json['user_id'],
        title=request.json['title'],
        image_url=request.json['image_url'],
        yarn_weight_id=request.json['yarn_weight_id'],
        fiber_content=request.json['fiber_content'],
        yardage=request.json['yardage'],
        allergens=request.json['allergens'],
        swap_target_id=request.json['swap_target_id'],
        text_content=request.json['text_content'],
        created_at=datetime.now(),
        updated_at=datetime.now()
        )
    try:
        db.session.add(scrap)
        db.session.commit()
        return jsonify(scrap.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the scrap occured']}, 400)

@scrap_routes.route('/', methods=['PUT'])
def put_scrap():
    db.session.query(Scrap).filter(Scrap.id == request.json['id']).update({
        'title': request.json['title'],
        'image_url': request.json['image_url'],
        'yarn_weight_id': request.json['yarn_weight_id'],
        'fiber_content': request.json['fiber_content'],
        'yardage': request.json['yardage'],
        'allergens': request.json['allergens'],
        'swap_target_id': request.json['swap_target_id'],
        'text_content': request.json['text_content'],
        'updated_at': datetime.now()
    }, synchronize_session='fetch')
    db.session.commit()
    scrap = Scrap.query.get(request.json['id'])
    if scrap:
        return jsonify(scrap.to_JSON())
    else:
        return make_response({'errors': ['Edit on non-existent scrap']}, 404)

@scrap_routes.route('/', methods=['DELETE'])
def delete_scrap():
    scrap_id = request.json['id']
    scrap = Scrap.query.get(scrap_id)
    if scrap:
        db.session.delete(scrap)
        db.session.commit()
        return jsonify({'errors': False})
    else:
        return make_response({'errors': ['Delete on non-existent scrap']}, 404)
