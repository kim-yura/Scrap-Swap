import { csrfFetch } from "../helpers";

// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const EDIT_USER = 'session/editUser';
const CREATE_FOLLOW = 'follows/createFollow';
const DELETE_FOLLOW = 'follows/deleteFollow';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const editUser = ({
  id,
  username,
  profilePicURL,
  bio
}) => async (dispatch) => {
  const response = await csrfFetch('/api/users/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      username,
      profile_pic_url: profilePicURL,
      bio
    })
  });

  if (response.ok) {
    const user = await response.json();
    dispatch(editUserAction(user));
    return user;
  };
};

const editUserAction = (user) => ({
  type: EDIT_USER,
  user
});

// -------------------- CREATE FOLLOW -------------------- //

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

// -------------------- DELETE FOLLOW -------------------- //

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

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case EDIT_USER:
      newState.user = action.user;
      return newState;
    case CREATE_FOLLOW:
      newState.user = action.follower;
      return newState;
    case DELETE_FOLLOW:
      newState.user = action.follower;
      return newState;
    default:
      return state;
  }
}
