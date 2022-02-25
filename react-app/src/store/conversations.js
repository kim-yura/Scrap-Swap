import { csrfFetch } from "../helpers";

const LOAD_ALL_CONVERSATIONS = 'conversations/loadAllConversations';
const LOAD_CONVERSATION = 'conversations/loadConversation';
const CREATE_CONVERSATION = 'conversations/createConversation';

// -------------------- READ -------------------- //

export const loadAllConversations = () => async (dispatch) => {
    const response = await csrfFetch('/api/conversations/');
    const allConversations = await response.json();
    dispatch(loadAllConversationsAction(allConversations));
    return allConversations;
};

const loadAllConversationsAction = (allConversations) => ({
    type: LOAD_ALL_CONVERSATIONS,
    allConversations
});

export const loadConversation = (conversationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/conversations/${conversationId}`);
    if (response.ok) {
        const conversation = await response.json();
        if (conversation.errors) {
            return;
        };
        dispatch(loadConversationAction(conversation));
    };
};

const loadConversationAction = (conversation) => ({
    type: LOAD_CONVERSATION,
    conversation
});

// -------------------- CREATE -------------------- //

export const createConversation = (conversationName, userId) => async (dispatch) => {
    const response = await csrfFetch('/api/conversations/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            conversation_name: conversationName,
            user_id: userId
        })
    });

    if (response.ok) {
        const conversation = await response.json();
        dispatch(createConversationAction(conversation));
        return conversation;
    };
};

const createConversationAction = (conversation) => ({
    type: CREATE_CONVERSATION,
    conversation
});

// -------------------- REDUCER -------------------- //

const conversationReducer = (state = {}, action) => {
    let newState = { ...state};

    switch (action.type) {
        case LOAD_ALL_CONVERSATIONS:
            action.allConversations.forEach(conversation => {
                newState[conversation.id] = conversation;
            });
            return newState;
        case LOAD_CONVERSATION:
        case CREATE_CONVERSATION:

        default:
            return state;
    }
};

export default conversationReducer;
