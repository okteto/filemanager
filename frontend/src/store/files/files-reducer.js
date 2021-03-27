export const initialState = {
  loaded: false,
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'files/receiveFiles': {
      return {
        ...state,
        loaded: true,
        list: action.files ?? []
      };
    }
    default: {
      return state;
    }
  }
};
