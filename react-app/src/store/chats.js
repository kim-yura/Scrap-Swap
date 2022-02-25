import { csrfFetch } from "../helpers";

const LOAD_CHATS = 'chats/loadChats';
const CREATE_CHAT = 'chats/createChat';

// -------------------- READ -------------------- //

export const loadChats = (conversationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/conversations/${conversationId}/chats`);
    if (response.ok) {
        const chats = await response.json();
        if (chats.errors) {
            return;
        };
        dispatch(loadChatsAction(chats));
        return chats;
    };
};

const loadChatsAction = (chats) => ({
    type: LOAD_CHATS,
    chats
});

// -------------------- CREATE -------------------- //

export const createChat = (conversationId, userId, chatContent) => async (dispatch) => {
    const response = await csrfFetch(`/api/chats/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            conversation_id: conversationId,
            user_id: userId,
            chat_content: chatContent
        })
    });

    if (response.ok) {
        const chat = await response.json();
        dispatch(createChatAction(chat));
        return chat;
    };
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
        case CREATE_CHAT:

        default:
            return state;
    }
};

export default chatReducer;
