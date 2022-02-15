from app.models import db, Scrap, swap_target, yarn_weight



def seed_scraps():
    scrap_1 = Scrap(
        user_id=1,
        title='Briar Rose',
        image_url='/images/scrap_1.jpg',
        yarn_weight_id=4,
        fiber_content='Merino Cashmere',
        yardage=264,
        allergens='Non-smoking, cat-friendly home',
        swap_target_id=1,
        text_content="I've decided that pink is no longer my color, lol! Looking to trade for a similar amount of blue-colored yarn. Fingering weight or light fingering weight preferred. I am based in the US, and can only trade domestically (sorry!)."
    )
    scrap_2 = Scrap(
        user_id=1,
        title='Rowan Soft Yak DK',
        image_url='/images/scrap_2.jpg',
        yarn_weight_id=6,
        fiber_content='75% Cotton, 15% Yak',
        yardage=148,
        allergens='Non-smoking, cat-friendly home',
        swap_target_id=1,
        text_content="I've decided that pink is no longer my color, lol! I'm looking to trade for a similar amount of blue-colored yarn. I am based in the US, and can only trade domestically (sorry!)."
    )
    scrap_3 = Scrap(
        user_id=2,
        title='Ocean By the Sea Thicc',
        image_url='/images/scrap_3.jpg',
        yarn_weight_id=10,
        fiber_content='Merino wool',
        yardage=28,
        allergens='Non-smoking, dog-friendly home',
        swap_target_id=2,
        text_content="Clearing out bits of my stash, free to good homes but please help me cover shipping, thanks!"
    )
    scrap_4 = Scrap(
        user_id=2,
        title='Anzula Cloud',
        image_url='/images/scrap_4.jpg',
        yarn_weight_id=3,
        fiber_content='80% Merino, 10% Nylon, 10% Cashmere',
        yardage=172,
        allergens='Non-smoking, dog-friendly home',
        swap_target_id=2,
        text_content="Clearing out bits of my stash, free to good homes but please help me cover shipping, thanks!"
    )
    scrap_5 = Scrap(
        user_id=3,
        title="Stonehedge Fiber Mill Shepherd's Wool Worsted",
        image_url='/images/scrap_5.jpg',
        yarn_weight_id=8,
        fiber_content='Merino Wool',
        yardage=250,
        swap_target_id=3,
        allergens='',
        text_content="I'm clearing out my mother's estate and I know she would want her yarn stash to go to somebody who will enjoy using it. All the yarns I've listed are free to good homes."
    )
    scrap_6 = Scrap(
        user_id=3,
        title="Stonehedge Fiber Mill Shepherd's Wool Worsted",
        image_url='/images/scrap_6.jpg',
        yarn_weight_id=8,
        fiber_content='Merino Wool',
        yardage=250,
        swap_target_id=3,
        allergens='',
        text_content="I'm clearing out my mother's estate and I know she would want her yarn stash to go to somebody who will enjoy using it. All the yarns I've listed are free to good homes."
    )

    db.session.add(scrap_1)
    db.session.add(scrap_2)
    db.session.add(scrap_3)
    db.session.add(scrap_4)
    db.session.add(scrap_5)
    db.session.add(scrap_6)

    db.session.commit()

def undo_seed_scraps():
    db.session.execute('TRUNCATE scraps RESTART IDENTITY CASCADE;')
    db.session.commit()
