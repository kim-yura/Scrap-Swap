from flask.cli import AppGroup
from .users import seed_users, undo_users
from .yarn_weights import seed_yarn_weights, undo_yarn_weights
from .swap_targets import seed_swap_targets, undo_swap_targets
from .scraps import seed_scraps, undo_seed_scraps
from .comments import seed_comments, undo_seed_comments
from .likes import seed_likes, undo_seed_likes
from .chats import seed_chats, undo_seed_chats

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_yarn_weights()
    seed_swap_targets()
    seed_scraps()
    seed_comments()
    seed_likes()
    seed_chats()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_yarn_weights()
    undo_swap_targets()
    undo_seed_scraps()
    undo_seed_comments()
    undo_seed_likes()
    undo_seed_chats()
