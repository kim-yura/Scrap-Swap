from app.models import db, Comment



def seed_comments():
    comment_1 = Comment(
        scrap_id=1,
        user_id=2,
        content="I have some blues in my swap stash! Lmk if you find one you like!"
    )
    comment_2 = Comment(
        scrap_id=1,
        user_id=1,
        reply=1,
        content="Thanks! I'll check out your swap stash and get back to you!"
    )
    comment_3 = Comment(
        scrap_id=1,
        user_id=3,
        content="This pink is so pretty :heart_eyes:"
    )
    comment_4 = Comment(
        scrap_id=2,
        user_id=4,
        content="Interested! Please check out my Scraps!"
    )
    comment_5 = Comment(
        scrap_id=2,
        user_id=1,
        reply=5,
        content="On it!"
    )
    comment_6 = Comment(
        scrap_id=3,
        user_id=4,
        content="I really like this but I don't know what I could do with 28 yards?"
    )
    comment_7 = Comment(
        scrap_id=3,
        user_id=5,
        reply=7,
        content="You could use it for weaving or maybe blend it back into a fiber for spinning?"
    )
    comment_8 = Comment(
        scrap_id=3,
        user_id=4,
        reply=7,
        content="Oh that's a good idea! I'll have to think about it though."
    )
    comment_9 = Comment(
        scrap_id=4,
        user_id=5,
        content="Interested!"
    )
    comment_10 = Comment(
        scrap_id=5,
        user_id=4,
        content="I'm so sorry for your loss. Sending you internet hugs. <3"
    )
    comment_11 = Comment(
        scrap_id=5,
        user_id=6,
        content="Very interested in this! I also commented on some of your other Scraps. :)"
    )
    comment_12 = Comment(
        scrap_id=6,
        user_id=6,
        content="Very interested in this! I also commented on some of your other Scraps. :)"
    )
    comment_13 = Comment(
        scrap_id=7,
        user_id=2,
        content="What good luck! I've actually been looking for another skein of this yarn! I'd love to help pay for postage!"
    )
    comment_14 = Comment(
        scrap_id=8,
        user_id=1,
        content="Interested! I also knit a scarf out of this base and the yarn is SO. SOFT."
    )
    comment_15 = Comment(
        scrap_id=8,
        user_id=6,
        reply=15,
        content="Yes! Just lmk if you're able to help with postage :)"
    )
    comment_16 = Comment(
        scrap_id=8,
        user_id=1,
        reply=15,
        content="Oops, I forgot to mention that yes! I'm happy to help with postage :)"
    )

    db.session.add(comment_1)
    db.session.add(comment_2)
    db.session.add(comment_3)
    db.session.add(comment_4)
    db.session.add(comment_5)
    db.session.add(comment_6)
    db.session.add(comment_7)
    db.session.add(comment_8)
    db.session.add(comment_9)
    db.session.add(comment_10)
    db.session.add(comment_11)
    db.session.add(comment_12)
    db.session.add(comment_13)
    db.session.add(comment_14)
    db.session.add(comment_15)
    db.session.add(comment_16)

    db.session.commit()

def undo_seed_comments():
    db.session.execute('TRUNCATE scraps RESTART IDENTITY CASCADE;')
    db.session.commit()
