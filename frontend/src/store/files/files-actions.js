import formatFiles from "../../helpers/formatFiles"
import { getFiles } from "../../../utils/api/files"

export const receiveFiles = files => {
  
  return {
    type: 'files/receiveFiles',
    files
  };
};

export const refreshFiles = () => {
  return async dispatch => {
    try {
      const getData = await getFiles();
      const rawData = getData.data
      const formattedFiles = formatFiles(rawData)
      dispatch(receiveFiles(formattedFiles));
    } catch (error) {
      console.error(error);
    }
  };
};
