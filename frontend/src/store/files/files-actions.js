
export const receiveFiles = files => {
  return {
    type: 'files/receiveFiles',
    files
  };
};

export const refreshFiles = (files) => {
  return async dispatch => {
    dispatch(receiveFiles(files));
  };
};
