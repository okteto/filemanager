import React from 'react';
import PropTypes from 'prop-types';

import styles from "./FileContent.module.css";

function FileContent({ file = null }) {
  return (
    <div className={styles.FileContent}>
      <pre>
        <h1>Holi</h1>
        {file?.content && atob(file.content)}
      </pre>
    </div>
  );
}

FileContent.propTypes = {
  file: PropTypes.object
};

export default FileContent;
