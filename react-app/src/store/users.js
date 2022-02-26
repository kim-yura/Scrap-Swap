import { csrfFetch } from "../helpers";

const FETCH_USERS = 'users/fetchUsers';

export const fetchUsers = () => async (dispatch) => {
    const response = await fetch('/api/users/');
    const allUsers = await response.json();
    dispatch(fetchUsersAction(Object.values(allUsers)));
    return Object.values(allUsers);
};

const fetchUsersAction = (allUsers) => ({
    type: FETCH_USERS,
    allUsers
});

const userReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case FETCH_USERS:
            action.allUsers.forEach(user => {
                newState = user;
            });
            return newState;
        default:
            return newState;
    }
};

export default userReducer;
