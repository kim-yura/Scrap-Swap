from app.models import db, Like



def seed_likes():
    scrap_like_1 = Like(
        scrap_id=1,
        user_id=2
    )
    scrap_like_2 = Like(
        scrap_id=1,
        user_id=3
    )
    scrap_like_3 = Like(
        scrap_id=2,
        user_id=2
    )
    scrap_like_4 = Like(
        scrap_id=2,
        user_id=3
    )
    scrap_like_5 = Like(
        scrap_id=3,
        user_id=1
    )
    scrap_like_6 = Like(
        scrap_id=4,
        user_id=1
    )
    scrap_like_7 = Like(
        scrap_id=5,
        user_id=1
    )
    scrap_like_8 = Like(
        scrap_id=5,
        user_id=2
    )
    scrap_like_9 = Like(
        scrap_id=6,
        user_id=1
    )
    scrap_like_10 = Like(
        scrap_id=7,
        user_id=2
    )
    scrap_like_11 = Like(
        scrap_id=8,
        user_id=2
    )
    comment_like_1 = Like(
        comment_id=1,
        user_id=1
    )
    comment_like_2 = Like(
        comment_id=2,
        user_id=1
    )
    comment_like_3 = Like(
        comment_id=3,
        user_id=1
    )

    db.session.add(scrap_like_1)
    db.session.add(scrap_like_2)
    db.session.add(scrap_like_3)
    db.session.add(scrap_like_4)
    db.session.add(scrap_like_5)
    db.session.add(scrap_like_6)
    db.session.add(scrap_like_7)
    db.session.add(scrap_like_8)
    db.session.add(scrap_like_9)
    db.session.add(scrap_like_10)
    db.session.add(scrap_like_11)
    db.session.add(comment_like_1)
    db.session.add(comment_like_2)
    db.session.add(comment_like_3)

    db.session.commit()

def undo_seed_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
