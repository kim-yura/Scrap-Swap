import { csrfFetch } from "../helpers";

const LOAD_CHATS = 'chats/loadChats';
const LOAD_CONVOS = 'chats/loadConvos';
const CREATE_CHAT = 'chats/createChat';

// -------------------- READ -------------------- //

export const loadChats = () => async (dispatch) => {
    const response = await csrfFetch(`/api/chats/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        const chats = Object.values(await response.json())[0];
        dispatch(loadChatsAction(chats));
        return chats;
    };
};

const loadChatsAction = (chats) => ({
    type: LOAD_CHATS,
    chats
});

export const loadConvos = (
    sessionUserId
) => async (dispatch) => {
    const response = await csrfFetch(`/api/chats/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        const chats = Object.values(await response.json())[0];
        const usersConvos = new Set();
        chats.forEach((chat) => {
            if (chat.convo_id.includes(sessionUserId)) {
                usersConvos.add([chat.convo_id, chat.user]);
            };
        });
        const usersConvosArr = Array.from(usersConvos);
        dispatch(loadConvosAction(usersConvosArr));
        return usersConvosArr;
    };
};

const loadConvosAction = (usersConvosArr) => ({
    type: LOAD_CONVOS,
    usersConvosArr
});

// -------------------- CREATE -------------------- //

export const createChat = ({
    convoId,
    userId,
    message
}) => async (dispatch) => {
    const response = await csrfFetch('/api/chats/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            convoId,
            userId,
            message
        })
    });

    if (response.ok) {
        const chat = await response.json();
        dispatch(createChatAction((chat)));
        return chat;
    }
};

const createChatAction = (chat) => ({
    type: CREATE_CHAT,
    chat
});

// -------------------- REDUCER -------------------- //

const chatReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_CHATS:
            action.chats.forEach(chat => {
                newState[chat.id] = chat;
            });
            return newState;
        case LOAD_CONVOS:
            newState.usersConvos = action.usersConvosArr;
            return newState;
        case CREATE_CHAT:

        default:
            return state;
    }
};

export default chatReducer;
