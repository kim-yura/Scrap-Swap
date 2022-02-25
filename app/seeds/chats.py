from app.models import db, Chat



def seed_chats():
    chat_1 = Chat(
        convo_id='&1&2&',
        user_id=1,
        message="Hello! I'm very interested in your listed Scrap Ocean By the Sea Thicc. I'm willing to help pay postage as well!"
    )
    chat_2 = Chat(
        convo_id='&1&2&',
        user_id=2,
        message="Awesome! Let me know your mailing address and I can get you an estimate for postage."
    )
    chat_3 = Chat(
        convo_id='&1&2&',
        user_id=1,
        message="My mailing address is 221B Baker Street, London, UK. Thanks again!"
    )
    chat_4 = Chat(
        convo_id='&1&3&',
        user_id=3,
        message="Hello, I saw you were interested in trading some pink yarn for some blues. I have a skein of Stonehedge Fiber in blue, let me know if you'd be interested in a swap!"
    )
    chat_5 = Chat(
        convo_id='&1&3&',
        user_id=1,
        message="Thanks for messaging me! I'll take a look at your Scraps in a bit. :)"
    )
    chat_6 = Chat(
        convo_id='&2&4&',
        user_id=2,
        message="Hello! I'm very interested in your skein of Crystal Palace Yarns Panda Silk Print. I'm happy to pay for postage, of course. Lmk what info you need from me!"
    )

    db.session.add(chat_1)
    db.session.add(chat_2)
    db.session.add(chat_3)
    db.session.add(chat_4)
    db.session.add(chat_5)
    db.session.add(chat_6)

    db.session.commit()

def undo_seed_chats():
    db.session.execute('TRUNCATE chats RESTART IDENTITY CASCADE;');
    db.session.commit()
