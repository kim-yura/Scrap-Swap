from .db import db


class SwapTarget(db.Model):
    __tablename__ = 'swap_targets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)

    scrap = db.relationship('Scrap', back_populates='swap_target')

    @property
    def swap_type(self):
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
