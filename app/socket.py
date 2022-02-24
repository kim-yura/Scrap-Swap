from flask_socketio import SocketIO, emit, join_room, leave_room, send

socketio = SocketIO()

# if os.environ.get("FLASK_ENV") == "production":
#     origins = [
#     "https://scrapswap.herokuapp.com/",
#     "https://scrapswap.herokuapp.com/"
#     ]
# else:
#     origins = "*"

socketio = SocketIO(cors_allowed_origins="*")


# Handle a chat message

@socketio.on("chat")
def handle_chat(data):
    conversation = data['conversation']
    emit("chat", data, broadcast=True, to=conversation)
    # code to follow
