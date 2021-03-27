
export const receiveFiles = files => {
  return {
    type: 'files/receiveFiles',
    files
  };
};

export const refreshFiles = () => {
  return async dispatch => {
    dispatch(receiveFiles([]));
  };
};
