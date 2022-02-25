from app.models import db, Conversation



def seed_conversations():
    convo_1 = Conversation(
        user_id=1,
        conversation_name='c1c2c'
    )
    convo_2 = Conversation(
        user_id=2,
        conversation_name='c1c2c'
    )
    convo_3 = Conversation(
        user_id=1,
        conversation_name='c1c3c'
    )
    convo_4 = Conversation(
        user_id=3,
        conversation_name='c1c3c'
    )
    convo_5 = Conversation(
        user_id=1,
        conversation_name='c1c4c'
    )
    convo_6 = Conversation(
        user_id=4,
        conversation_name='c1c4c'
    )
    convo_7 = Conversation(
        user_id=2,
        conversation_name='c2c3c'
    )
    convo_8 = Conversation(
        user_id=3,
        conversation_name='c2c3c'
    )

    db.session.add(convo_1)
    db.session.add(convo_2)
    db.session.add(convo_3)
    db.session.add(convo_4)
    db.session.add(convo_5)
    db.session.add(convo_6)
    db.session.add(convo_7)
    db.session.add(convo_8)

    db.session.commit()

def undo_seed_conversations():
    db.session.execute('TRUNCATE conversations RESTART IDENTITY CASCADE;')
    db.session.commit()
