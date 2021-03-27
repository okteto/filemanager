export const initialState = {
  selectedFile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'filemanager/selectFile': {
      return {
        ...state,
        selectedFile: action.file ?? initialState.selectedFile
      }
    }
    default: {
      return state;
    }
  }
};
