import {
  GET_MESSAGES_LOADING,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  ADD_MESSAGE_LOADING,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAIL,
} from '../types';

const initialState = {
  messages: [],
  isLoading: false,
  error: null,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MESSAGES_LOADING:
    case ADD_MESSAGE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: payload.messages,
      };
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: [payload.message, ...state.messages],
      };
    case GET_MESSAGES_FAIL:
    case ADD_MESSAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
