from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='DemoYuRa',
        email='yura@aa.io',
        password='password',
        profile_pic_url='/images/profilepic_1.jpg'
        )
    knittywitty = User(
        username='knittywitty',
        email='knittywitty@aa.io',
        password='password',
        profile_pic_url='/images/profilepic_2.jpg'
        )
    purlsofwisdom = User(
        username='purlsofwisdom',
        email='purlsofwisdom@aa.io',
        password='password',
        profile_pic_url='/images/profilepic_3.jpg'
        )
    knithappens = User(
        username='knithappens',
        email='knithappens@aa.io',
        password='password',
        profile_pic_url='/images/profilepic_4.jpg'
        )
    stitchcraft = User(
        username='stitchcraft',
        email='stitchcraft@aa.io',
        password='password',
        profile_pic_url='/images/profilepic_5.jpg'
        )
    comingunraveled = User(
        username='comingunraveled',
        email='comingunraveled@aa.io',
        password='password',
        profile_pic_url='/images/profilepic_6.jpg'
        )


    db.session.add(demo)
    db.session.add(knittywitty)
    db.session.add(purlsofwisdom)
    db.session.add(knithappens)
    db.session.add(stitchcraft)
    db.session.add(comingunraveled)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
