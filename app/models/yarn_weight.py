from .db import db


class YarnWeight(db.Model):
    __tablename__ = 'yarn_weights'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)

    scrap = db.relationship('Scrap', back_populates='yarn_weight')

    @property
    def yarn_weight(self):
        return self.name

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'name': self.name
        }
