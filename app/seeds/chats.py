from app.models import db, Chat



def seed_chats():
    chat_1 = Chat(
        conversation_id = 1,
        conversation_name = 'c1c2c',
        user_id = 1,
        chat_content="Hello! I am very interested in your Scrap for Ocean By the Sea Thicc. Please let me know how I can help pay for postage, thanks!"
    )
    chat_2 = Chat(
        conversation_id = 1,
        conversation_name = 'c1c2c',
        user_id = 2,
        chat_content="Hi! Send me your address and I can get a shipping estimate :)"
    )
    chat_3 = Chat(
        conversation_id = 1,
        conversation_name = 'c1c2c',
        user_id = 1,
        chat_content="My address is 221B Baker Street, London, UK. Thanks!"
    )
    chat_4 = Chat(
        conversation_id = 3,
        conversation_name = 'c1c3c',
        user_id = 3,
        chat_content="Hi! I saw you were looking for blue yarn. I have a skein listed, lmk if you'd be interested in a swap :)"
    )
    chat_5 = Chat(
        conversation_id = 3,
        conversation_name = 'c1c3c',
        user_id = 1,
        chat_content="Thanks! I'll definitely check it out!"
    )
    chat_6 = Chat(
        conversation_id = 5,
        conversation_name = 'c1c4c',
        user_id = 4,
        chat_content="I'd be interested in helping pay for postage for your skein of Crystal Palace Yarns!"
    )
    chat_7 = Chat(
        conversation_id = 7,
        conversation_name = 'c2c3c',
        user_id = 2,
        chat_content="I'm very interested in your green skein of Stonehedge Fiber Mill Shepherd's Wool! Lmk what info you need."
    )
    chat_8 = Chat(
        conversation_id = 7,
        conversation_name = 'c2c3c',
        user_id = 3,
        chat_content="Lmk your mailing address, and I can get it out for you in the mail next Monday :)"
    )

    db.session.add(chat_1)
    db.session.add(chat_2)
    db.session.add(chat_3)
    db.session.add(chat_4)
    db.session.add(chat_5)
    db.session.add(chat_6)
    db.session.add(chat_7)
    db.session.add(chat_8)

    db.session.commit()


def undo_seed_chats():
    db.session.execute('TRUNCATE chats RESTART IDENTITY CASCADE;')
