from turtle import pos
from app.models import db, SwapTarget



def seed_swap_targets():
    trade = SwapTarget(
        name='Trade'
    )
    postage = SwapTarget(
        name='Send in exchange for postage'
    )
    free = SwapTarget(
        name='Send for free'
    )

    db.session.add(trade)
    db.session.add(postage)
    db.session.add(free)

    db.session.commit()

def undo_swap_targets():
    db.session.execute('TRUNCATE swap_targets RESTART IDENTITY CASCADE;')
    db.session.commit()
