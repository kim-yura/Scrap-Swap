from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='DemoYuRa',
        email='yura@aa.io',
        password='HelloIAmTheDev123',
        profile_pic_url='https://scrapswap.s3.amazonaws.com/profilepic_1.jpg',
        bio="Just a yarny on the internet. I'm also the dev for this awesome website! Please consider hiring me. :)"
        )
    knittywitty = User(
        username='knittywitty',
        email='knittywitty@aa.io',
        password='password',
        profile_pic_url='https://scrapswap.s3.amazonaws.com/profilepic_2.jpg'
        )
    purlsofwisdom = User(
        username='purlsofwisdom',
        email='purlsofwisdom@aa.io',
        password='password',
        profile_pic_url='https://scrapswap.s3.amazonaws.com/profilepic_3.jpg'
        )
    knithappens = User(
        username='knithappens',
        email='knithappens@aa.io',
        password='password',
        profile_pic_url='https://scrapswap.s3.amazonaws.com/profilepic_4.jpg'
        )
    stitchcraft = User(
        username='stitchcraft',
        email='stitchcraft@aa.io',
        password='password',
        profile_pic_url='https://scrapswap.s3.amazonaws.com/profilepic_5.jpg'
        )
    comingunraveled = User(
        username='comingunraveled',
        email='comingunraveled@aa.io',
        password='password',
        profile_pic_url='https://scrapswap.s3.amazonaws.com/profilepic_6.jpg'
        )
    beary_warm = User(
        username='beary_warm',
        email='joonie@scraps.com',
        password='gomB1234',
        profile_pic_url='https://scrapswap.s3.amazonaws.com/profilepic_7.jpeg'
    )
    lucky_scrapper = User(
        username='TheLuckyScrapper',
        email='luckyscrapper@iloveknitting.com',
        password='lovemyleftovers1',
        profile_pic_url='https://scrapswap.s3.amazonaws.com/profilepic_8.jpg'
    )
    yarnaddict92 = User(
        username='yarnaddict92',
        email='knittingforbrains@gmail.com',
        password='Scraps*Pass',
        profile_pic_url='https://scrapswap.s3.amazonaws.com/profilepic_9.jpg'
    )
    howinternet = User(
        username='HowDoesTheInternetEvenWorkTho',
        email='0jl34sdXxc@whatevenislife.com',
        password='1G3$ndy2'
    )


    db.session.add(demo)
    db.session.add(knittywitty)
    db.session.add(purlsofwisdom)
    db.session.add(knithappens)
    db.session.add(stitchcraft)
    db.session.add(comingunraveled)
    db.session.add(beary_warm)
    db.session.add(lucky_scrapper)
    db.session.add(yarnaddict92)
    db.session.add(howinternet)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
