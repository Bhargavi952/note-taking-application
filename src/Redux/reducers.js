import {
  CREATE,
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
} from "./actionType";

const initState = {
  isLoading: false,
};

export const noteDataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CREATE: {
      return {
        ...state,
        payload,
      };
    }

    case FETCH_ALL_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_ALL_SUCCESS: {
      return {
        ...state,
        notedata: payload,
        isLoading: false,
      };
    }
    case FETCH_ALL_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
