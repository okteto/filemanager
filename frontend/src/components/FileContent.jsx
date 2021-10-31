import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import { getFiles } from "../../utils/api/files";
import styles from "./FileContent.module.css";

function FileContent({ file = null }) {

  useEffect(() => {
    const loadFiles = async () => {
      try {
        const fetechData = await getFiles();
        console.log("fetechData", fetechData);

      } catch (error) {
        console.error(error);
      }
      
    };
    loadFiles()
  }, []);

  return (
    <div className={styles.FileContent}>
      <pre>
        {file?.content && atob(file.content)}
      </pre>
    </div>
  );
}

FileContent.propTypes = {
  file: PropTypes.object
};

export default FileContent;
