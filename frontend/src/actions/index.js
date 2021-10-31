import {
    LIST_FILES,
    UPDATE_FILE,
  } from "./action-types";
  
  export const reduxListFiles = (listFiles) => ({
    type: LIST_FILES,
    payload: { listFiles },
  });
  
  export const reduxUpdateFile = ({ name }) => ({
    type: UPDATE_FILE,
    payload: { name },
  });
  