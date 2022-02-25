from app.models import db, Scrap, swap_target, yarn_weight



def seed_scraps():
    scrap_1 = Scrap(
        user_id=1,
        title='Briar Rose',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_1.jpg',
        yarn_weight_id=4,
        fiber_content='Merino Cashmere',
        yardage=264,
        allergens='Cat-friendly home',
        swap_target_id=1,
        text_content="I've decided that pink is no longer my color, lol! Looking to trade for a similar amount of blue-colored yarn. Fingering weight or light fingering weight preferred. I am based in the US, and can only trade domestically (sorry!).",
        colors=' pink yellow green '
    )
    scrap_2 = Scrap(
        user_id=1,
        title='Rowan Soft Yak DK',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_2.jpg',
        yarn_weight_id=6,
        fiber_content='75% Cotton, 15% Yak',
        yardage=148,
        allergens='Cat-friendly home',
        swap_target_id=1,
        text_content="I've decided that pink is no longer my color, lol! I'm looking to trade for a similar amount of blue-colored yarn. I am based in the US, and can only trade domestically (sorry!).",
        colors=' pink '
    )
    scrap_3 = Scrap(
        user_id=2,
        title='Ocean By the Sea Thicc',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_3.jpg',
        yarn_weight_id=10,
        fiber_content='Merino wool',
        yardage=28,
        allergens='Dog-friendly home',
        swap_target_id=2,
        text_content="Clearing out bits of my stash, free to good homes but please help me cover shipping, thanks!",
        colors=' blue green '
    )
    scrap_4 = Scrap(
        user_id=2,
        title='Anzula Cloud',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_4.jpg',
        yarn_weight_id=3,
        fiber_content='80% Merino, 10% Nylon, 10% Cashmere',
        yardage=172,
        allergens='Dog-friendly home',
        swap_target_id=2,
        text_content="Clearing out bits of my stash, free to good homes but please help me cover shipping, thanks!",
        colors=' blue gray '
    )
    scrap_5 = Scrap(
        user_id=3,
        title="Stonehedge Fiber Mill Shepherd's Wool Worsted",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_5.jpg',
        yarn_weight_id=8,
        fiber_content='Merino Wool',
        yardage=250,
        swap_target_id=3,
        allergens='',
        text_content="I'm clearing out my mother's estate and I know she would want her yarn stash to go to somebody who will enjoy using it. All the yarns I've listed are free to good homes.",
        colors=' blue '
    )
    scrap_6 = Scrap(
        user_id=3,
        title="Stonehedge Fiber Mill Shepherd's Wool Worsted",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_6.jpg',
        yarn_weight_id=8,
        fiber_content='Merino Wool',
        yardage=250,
        swap_target_id=3,
        allergens='',
        text_content="I'm clearing out my mother's estate and I know she would want her yarn stash to go to somebody who will enjoy using it. All the yarns I've listed are free to good homes.",
        colors=' green '
    )
    scrap_7 = Scrap(
        user_id=4,
        title='Crystal Palace Yarns Panda Silk Print',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_7.jpg',
        yarn_weight_id=3,
        fiber_content='52% Bamboo Rayon, 43% Merino, 5% Silk',
        yardage=193,
        swap_target_id=2,
        allergens='',
        text_content="I got this as a gift, but I don't really know what to do with it, LOL. It's discontinued, but if you want to help me with postage, I'll send it your way for free!",
        colors=' purple orange '
    )
    scrap_8 = Scrap(
        user_id=6,
        title='Berroco Folio',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_8.jpg',
        yarn_weight_id=3,
        fiber_content='65% Alpaca, 35% Rayon',
        yardage=138,
        swap_target_id=2,
        allergens='',
        text_content="Leftover from knitting a shawl. It's super fuzzy and warm and soft, and I'll happily send it your way if you help me with postage!",
        colors=' yellow '
    )
    scrap_9 = Scrap(
        user_id=8,
        title='Bulky Yarn perfect for warm projects!',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_9.jpg',
        yarn_weight_id=9,
        fiber_content='100% Wool',
        yardage=53,
        swap_target_id=1,
        allergens='From a home with a cat',
        text_content='',
        colors=' yellow '
    )
    scrap_10 = Scrap(
        user_id=8,
        title='Mohair leftovers',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_10.jpg',
        yarn_weight_id=8,
        fiber_content='100% Wool',
        yardage=124,
        swap_target_id=1,
        allergens='From a home with a cat',
        text_content='',
        colors=' orange '
    )
    scrap_11 = Scrap(
        user_id=8,
        title='Little Blue Scraps',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_11.jpg',
        yarn_weight_id=7,
        fiber_content='97% cotton, 3% nylon',
        yardage=174,
        swap_target_id=1,
        allergens='From a home with a cat',
        text_content='',
        colors=' blue '
    )
    scrap_12 = Scrap(
        user_id=9,
        title='Abundant Earth Fiber Botanical Sweets',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_12.JPG',
        yarn_weight_id=2,
        fiber_content='87% Merino, 13% Naturally dyed silk',
        yardage=105,
        swap_target_id=1,
        allergens='Cat, Dog',
        text_content='',
        colors=' orange '
    )
    scrap_13 = Scrap(
        user_id=9,
        title='Knitted Wit Sock Colorway',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_13.JPG',
        yarn_weight_id=4,
        fiber_content='80% Merino, 20% Nylon',
        yardage=227,
        swap_target_id=1,
        allergens='Cat, Dog',
        text_content='',
        colors=' pink '
    )
    scrap_14 = Scrap(
        user_id=9,
        title='Shalimar Yarns Enzo Sport',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_14.JPG',
        yarn_weight_id=5,
        fiber_content='70% Merino, 20% Cashmere, 10% Nylon',
        yardage=148,
        swap_target_id=1,
        allergens='Cat, Dog',
        text_content='',
        colors=' cream '
    )
    scrap_15 = Scrap(
        user_id=9,
        title='West Yorkshire Spinners Colour Lab DK',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_15.JPG',
        yarn_weight_id=6,
        fiber_content='100% British Wool',
        yardage=115,
        swap_target_id=1,
        allergens='Cat, Dog',
        text_content='',
        colors= ' cream '
    )
    scrap_16 = Scrap(
        user_id=9,
        title='Knit Pick Wool of the Andes',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_16.JPG',
        yarn_weight_id=7,
        fiber_content='100% Peruvian Highland Wool',
        yardage=64,
        swap_target_id=1,
        allergens='Cat, Dog',
        text_content='',
        colors=' brown '
    )
    scrap_17 = Scrap(
        user_id=9,
        title='Plymouth Galway Chunky',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_17.JPG',
        yarn_weight_id=9,
        fiber_content='100% Wool',
        yardage=110,
        swap_target_id=1,
        allergens='Cat, Dog',
        text_content='',
        colors=' pink '
    )
    scrap_18 = Scrap(
        user_id=10,
        title='Something Blue',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_18.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' blue white '
    )
    scrap_19 = Scrap(
        user_id=10,
        title='Pin Pricks',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_19.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' pink white '
    )
    scrap_20 = Scrap(
        user_id=10,
        title='Apologies Untold',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_20.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' purple white '
    )
    scrap_21 = Scrap(
        user_id=10,
        title='Dirty Secrets',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_21.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' pink '
    )
    scrap_22 = Scrap(
        user_id=10,
        title='Haunted',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_22.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' green red white '
    )
    scrap_23 = Scrap(
        user_id=10,
        title='Frolicking',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_23.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' yellow white purple '
    )
    scrap_24 = Scrap(
        user_id=10,
        title="Rose's Necklace",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_24.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' blue '
    )
    scrap_25 = Scrap(
        user_id=10,
        title='Tortoiseshell',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_25.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' cream orange brown '
    )
    scrap_26 = Scrap(
        user_id=10,
        title='Cheeto Dust',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_26.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' orange '
    )
    scrap_27 = Scrap(
        user_id=10,
        title='Peppermint Mocha',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_27.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' cream pink '
    )
    scrap_28 = Scrap(
        user_id=10,
        title='Marsh',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_28.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' yellow blue green '
    )
    scrap_29 = Scrap(
        user_id=10,
        title='Whispers',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_29.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' white green '
    )
    scrap_30 = Scrap(
        user_id=10,
        title='Spruce',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_30.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' green '
    )
    scrap_31 = Scrap(
        user_id=10,
        title='Come Again?',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_31.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' pink white '
    )
    scrap_32 = Scrap(
        user_id=10,
        title='Brush with Death',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_32.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' pink '
    )
    scrap_33 = Scrap(
        user_id=10,
        title='Does Anyone Earnestly Want a Corset?',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_33.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' pink '
    )
    scrap_34 = Scrap(
        user_id=10,
        title='Treasure Trove',
        image_url='https://scrapswap.s3.amazonaws.com/scrap_34.jpg',
        yarn_weight_id=4,
        fiber_content='100% Wool',
        yardage=100,
        swap_target_id=1,
        allergens='',
        text_content='',
        colors = ' pink '
    )
    scrap_35 = Scrap(
        user_id=1,
        title="Jo Shrp Silkroad Aran Tweed",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_35.jpg',
        yarn_weight_id='8',
        fiber_content='85% Wool, 10% Silk, 5% Cashmere',
        yardage='35',
        swap_target_id='1',
        allergens='Cat-friendly home',
        text_content='I have a little bit of this super squishy yarn left over from knitting a hat. Looking to trade for any blue yarns! I am based in the US, and can only trade domestically (sorry!).',
        colors = ' brown '
    )
    scrap_36 = Scrap(
        user_id=11,
        title="Shepherd’s Wool Crazy, Stonehedge Fiber Mills",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_36.jpg',
        yarn_weight_id='5',
        fiber_content='100% Merino',
        yardage='120',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' red blue pink gray '
    )
    scrap_37 = Scrap(
        user_id=11,
        title="Edition 3, Schoppel, Tante Emma (Aunty Emma)",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_37.jpg',
        yarn_weight_id='5',
        fiber_content='100% Merino (superwash)',
        yardage='164',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' red pink orange redorange brown '
    )
    scrap_38 = Scrap(
        user_id=11,
        title="Mechita, Malabrigo, Azul Profundo",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_38.jpg',
        yarn_weight_id='4',
        fiber_content='100% Merino (superwash)',
        yardage='54',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' blue '
    )
    scrap_39 = Scrap(
        user_id=11,
        title="Mechita, Malabrigo, Poipu",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_39.jpg',
        yarn_weight_id='4',
        fiber_content='100% Merino (superwash)',
        yardage='54',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' blue white bluegreen '
    )
    scrap_40 = Scrap(
        user_id=11,
        title="Smart, Sandnes Garn",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_40.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino (superwash)',
        yardage='46',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' blue '
    )
    scrap_41 = Scrap(
        user_id=11,
        title="Smart, Sandnes Garn",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_41.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino (superwash)',
        yardage='20',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' green '
    )
    scrap_42 = Scrap(
        user_id=11,
        title="Stumptown DK, Polka Dot Sheep, Moose Meadow",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_42.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino (superwash)',
        yardage='231',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' green '
    )
    scrap_43 = Scrap(
        user_id=11,
        title="Tosh Sport, MadTosh, Coquette Deaux",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_43.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino (superwash)',
        yardage='270',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' pink '
    )
    scrap_44 = Scrap(
        user_id=11,
        title="Como, Lamana, M",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_44.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino',
        yardage='524',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' gray '
    )
    scrap_45 = Scrap(
        user_id=11,
        title="Deluxe Tradition, Navia, White",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_45.jpg',
        yarn_weight_id='8',
        fiber_content='100% Faroese Wool',
        yardage='219',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' white cream '
    )
    scrap_46 = Scrap(
        user_id=11,
        title="Smart, Sandnes Garn, Red",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_46.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino (superwash)',
        yardage='20',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' red '
    )
    scrap_47 = Scrap(
        user_id=11,
        title="Smart, Sandnes Garn",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_47.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino (superwash)',
        yardage='20',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' green '
    )
    scrap_48 = Scrap(
        user_id=11,
        title="Smart, Sandnes Garn",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_48.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino (superwash)',
        yardage='10',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' green '
    )
    scrap_49 = Scrap(
        user_id=11,
        title="Smart, Sandnes Garn",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_49.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino (superwash)',
        yardage='18',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' white '
    )
    scrap_50 = Scrap(
        user_id=11,
        title="Arbor, Brooklyn Tweed",
        image_url='https://scrapswap.s3.amazonaws.com/scrap_50.jpg',
        yarn_weight_id='6',
        fiber_content='100% Merino',
        yardage='40',
        swap_target_id='1',
        allergens='Dog and Cat friendly home',
        text_content='',
        colors = ' red '
    )

    db.session.add(scrap_1)
    db.session.add(scrap_2)
    db.session.add(scrap_3)
    db.session.add(scrap_4)
    db.session.add(scrap_5)
    db.session.add(scrap_6)
    db.session.add(scrap_7)
    db.session.add(scrap_8)
    db.session.add(scrap_9)
    db.session.add(scrap_10)
    db.session.add(scrap_11)
    db.session.add(scrap_12)
    db.session.add(scrap_13)
    db.session.add(scrap_14)
    db.session.add(scrap_15)
    db.session.add(scrap_16)
    db.session.add(scrap_17)
    db.session.add(scrap_18)
    db.session.add(scrap_19)
    db.session.add(scrap_20)
    db.session.add(scrap_21)
    db.session.add(scrap_22)
    db.session.add(scrap_23)
    db.session.add(scrap_24)
    db.session.add(scrap_25)
    db.session.add(scrap_26)
    db.session.add(scrap_27)
    db.session.add(scrap_28)
    db.session.add(scrap_29)
    db.session.add(scrap_30)
    db.session.add(scrap_31)
    db.session.add(scrap_32)
    db.session.add(scrap_33)
    db.session.add(scrap_34)
    db.session.add(scrap_35)
    db.session.add(scrap_36)
    db.session.add(scrap_37)
    db.session.add(scrap_38)
    db.session.add(scrap_39)
    db.session.add(scrap_40)
    db.session.add(scrap_41)
    db.session.add(scrap_42)
    db.session.add(scrap_43)
    db.session.add(scrap_44)
    db.session.add(scrap_45)
    db.session.add(scrap_46)
    db.session.add(scrap_47)
    db.session.add(scrap_48)
    db.session.add(scrap_49)
    db.session.add(scrap_50)

    db.session.commit()

def undo_seed_scraps():
    db.session.execute('TRUNCATE scraps RESTART IDENTITY CASCADE;')
    db.session.commit()
