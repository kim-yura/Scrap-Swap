import { csrfFetch } from "../helpers";

const LOAD_ALL_LIKES = 'likes/loadAllLikes';
const CREATE_LIKE = 'likes/createLike';
const DELETE_LIKE = 'likes/deleteLike';

// -------------------- READ -------------------- //

export const loadAllLikes = () => async (dispatch) => {
    const response = await csrfFetch('/api/likes/');
    const allLikes = await response.json();
    dispatch(loadAllLikesAction(allLikes));
    return allLikes;
};

const loadAllLikesAction = (allLikes) => ({
    type: LOAD_ALL_LIKES,
    allLikes
});

// -------------------- CREATE -------------------- //

export const createLike = ({
    userId,
    scrapId
}) => async (dispatch) => {
    const response = await csrfFetch('/api/likes/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            scrap_id: scrapId
        })
    });

    if (response.ok) {
        const like = await response.json();
        dispatch(createLikeAction(like));
        return like;
    }
};

const createLikeAction = (like) => ({
    type: CREATE_LIKE,
    like
});

// -------------------- DELETE -------------------- //

export const deleteLike = (likeId) => async (dispatch) => {
    const response = await csrfFetch('/api/likes/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: likeId })
    });
    const like = await response.json();
    dispatch(deleteLikeAction(like, likeId));
};

const deleteLikeAction = (like, likeId) => {
    return {
        type: DELETE_LIKE,
        like,
        likeId
    };
};

// -------------------- REDUCER -------------------- //

const likeReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_ALL_LIKES:
            action.allLikes.forEach(like => {
                newState[like.id] = like;
            });
            return newState;
        case CREATE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case DELETE_LIKE:
            delete newState[action.likeId?.id];
            return newState;

        default: return state;
    }
}

export default likeReducer;
