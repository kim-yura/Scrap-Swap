from app.models import db, YarnWeight



def seed_yarn_weights():
    thread = YarnWeight(
        name='Thread'
    )
    lace = YarnWeight(
        name='Lace'
    )
    light_fingering = YarnWeight(
        name='Light Fingering'
    )
    fingering = YarnWeight(
        name='Fingering'
    )
    sport = YarnWeight(
        name='Sport'
    )
    dk = YarnWeight(
        name='DK'
    )
    worsted = YarnWeight(
        name='Worsted'
    )
    aran = YarnWeight(
        name='Aran'
    )
    bulky = YarnWeight(
        name='Bulky'
    )
    super_bulky = YarnWeight(
        name='Super Bulky'
    )
    jumbo = YarnWeight(
        name='Jumbo'
    )

    db.session.add(thread)
    db.session.add(lace)
    db.session.add(light_fingering)
    db.session.add(fingering)
    db.session.add(sport)
    db.session.add(dk)
    db.session.add(worsted)
    db.session.add(aran)
    db.session.add(bulky)
    db.session.add(super_bulky)
    db.session.add(jumbo)

    db.session.commit()

def undo_yarn_weights():
    db.session.execute('TRUNCATE yarn_weights RESTART IDENTITY CASCADE;')
    db.session.commit()
