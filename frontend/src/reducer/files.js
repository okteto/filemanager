import { LIST_FILES, UPDATE_FILE } from "../actions/action-types";

const INITIAL_STATE = {
  list: [],
};

function filesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_FILES:
        return { list: action.payload.listFiles };
    case UPDATE_FILE:
        return {
            ...state,
            name: action.payload.name
        };
    default:
      return state;
  }
}

export default filesReducer;