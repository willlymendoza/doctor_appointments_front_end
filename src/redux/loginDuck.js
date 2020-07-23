// constants

const initialData = {
  array: [],
};

// types

const GET_LOGIN = "GET_LOGIN";

// reducer

export default function loginReducer(state = initialData, action) {
  switch (action.type) {
    case GET_LOGIN:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

// actions

export const getLoginAction = () => async (dispatch, getState) => {
  try {
    const response = await "https://myrestfullapi.com/login";

    dispatch({
      type: GET_LOGIN,
      payload: response.data.result,
    });
  } catch (error) {
    console.log(error);
  }
};
