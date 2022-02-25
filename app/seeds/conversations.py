from app.models import db, Conversation



def seed_conversations():
    convo_1 = Conversation(
        user_id=1,
        conversation_name='%1%2%'
    )
    convo_2 = Conversation(
        user_id=2,
        conversation_name='%1%2%'
    )
    convo_3 = Conversation(
        user_id=1,
        conversation_name='%1%3%'
    )
    convo_4 = Conversation(
        user_id=3,
        conversation_name='%1%3%'
    )
    convo_5 = Conversation(
        user_id=1,
        conversation_name='%1%4%'
    )
    convo_6 = Conversation(
        user_id=4,
        conversation_name='%1%4%'
    )
    convo_7 = Conversation(
        user_id=2,
        conversation_name='%2%3%'
    )
    convo_8 = Conversation(
        user_id=3,
        conversation_name='%2%3%'
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
