import { csrfFetch } from "../helpers";

const LOAD_ALL_COMMENTS = 'comments/loadAllComments';
const CREATE_COMMENT = 'comments/createComment';
const EDIT_COMMENT = 'comments/editComment';
const DELETE_COMMENT = 'comments/deleteComment';

// -------------------- READ -------------------- //

export const loadAllComments = () => async (dispatch) => {
    const response = await csrfFetch('/api/comments/');
    const allComments = await response.json();
    dispatch(loadAllCommentsAction(allComments));
    return allComments;
};

const loadAllCommentsAction = (allComments) => ({
    type: LOAD_ALL_COMMENTS,
    allComments
})

// -------------------- CREATE -------------------- //

export const createComment = ({
    scrapId,
    userId,
    reply,
    content
}) => async (dispatch) => {
    const response = await csrfFetch('/api/comments/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            scrap_id: scrapId,
            user_id: userId,
            reply,
            content
        })
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(createCommentAction(comment));
        return comment;
    }
};

const createCommentAction = (comment) => ({
    type: CREATE_COMMENT,
    comment
});

// -------------------- EDIT -------------------- //

export const editComment = ({
    id,
    content
}) => async (dispatch) => {
    const response = await csrfFetch('/api/comments/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id,
            content
        })
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(editCommentAction(comment));
        return comment;
    };
};

const editCommentAction = (comment) => ({
    type: EDIT_COMMENT,
    comment
});


// -------------------- DELETE -------------------- //

export const deleteComment = (commentId) => async (dispatch) => {
    const response = await csrfFetch('/api/comments/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: commentId })
    });
    const comment = await response.json();
    dispatch(deleteCommentAction(comment, commentId));
};

const deleteCommentAction = (comment, commentId) => {
    return {
        type: DELETE_COMMENT,
        comment,
        commentId
    };
};

// -------------------- REDUCER -------------------- //

const commentReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_ALL_COMMENTS:
            action.allComments.forEach(comment => {
                newState[comment.id] = comment;
            });
            return newState;
        case CREATE_COMMENT:
        case EDIT_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case DELETE_COMMENT:
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
};

export default commentReducer;
