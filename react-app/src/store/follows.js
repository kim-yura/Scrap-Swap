import { csrfFetch } from "../helpers";

const CREATE_FOLLOW = 'follows/createFollow';
const DELETE_FOLLOW = 'follows/deleteFollow';

// -------------------- CREATE -------------------- //

export const createFollow = ({
    followerId,
    followingId
}) => async (dispatch) => {
    const response = await csrfFetch('/api/users/follow', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            follower_id: followerId,
            following_id: followingId
        })
    });

    if (response.ok) {
        const follower = await response.json();
        dispatch(createFollowAction(follower));
        return follower;
    }
};

const createFollowAction = (follower) => ({
    type: CREATE_FOLLOW,
    follower
});

// -------------------- DELETE -------------------- //

export const deleteFollow = ({
    followerId,
    followingId
}) => async (dispatch) => {
    const response = await csrfFetch('/api/users/unfollow', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            follower_id: followerId,
            following_id: followingId
        })
    });

    const follower = await response.json();
    dispatch(deleteFollowAction(follower));
};

const deleteFollowAction = (follower) => {
    return {
        type: DELETE_FOLLOW,
        follower
    };
};

// -------------------- REDUCER -------------------- //

const followReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case CREATE_FOLLOW:
            newState[action.follower] = action.follower;
            return newState;
        case DELETE_FOLLOW:
            newState[action.follower] = action.follower;
            return newState;

        default: return state;
    }
}

export default followReducer;
