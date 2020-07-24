// constants

const initialData = {
  userInfo: [],
  userToken: "",
  isAuthenticated: false,
};

// types

const SET_LOGIN = "SET_LOGIN";
const SET_LOGOUT = "SET_LOGOUT";

// reducer

export default function loginReducer(state = initialData, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        userInfo: action.payload.user,
        userToken: action.payload.userToken,
        isAuthenticated: true,
      };
    case SET_LOGOUT:
      return {
        ...state,
        userInfo: [],
        userToken: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

// actions

export const setLoginAction = (data) => async (dispatch, getState) => {
  dispatch({
    type: SET_LOGIN,
    payload: data,
  });
};

export const setLogoutAction = () => async (dispatch, getState) => {
  dispatch({
    type: SET_LOGOUT,
  });
};
