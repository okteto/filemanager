import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FileIcon from '../assets/images/file.svg';
import FolderIcon from '../assets/images/folder.svg';

import styles from "./FileExplorer.module.css";

function FileExplorer({ files = [], onClick }) {
  const [selected, setSelected] = useState(null);
  const handleClick = (file) => {
    onClick(file)
    setSelected(file.name)
  }
 
  return (
    <div className={styles.FileExplorer}>
      {files.length === 0 &&
        <div className={styles.FileExplorerEmpty}>
          The root folder is empty.
        </div>
      }
      {files.map(file => {
         const selectedClass =  file.name === selected ? styles.FileExplorerItemSelected : ""
        return(
          <button onClick={() => handleClick(file)} className={`${styles.FileExplorerItem} ${selectedClass}`} key={file.id}>
            <div className={styles.FileExplorerName}>
              {file.kind === 'folder' &&
              <FolderIcon className={styles.FileExplorerIcon} />
            }
            {file.kind !== 'folder' &&
              <FileIcon className={styles.FileExplorerIcon} />
            }
            {file.name}
            </div>
            <div className={styles.FileExplorerSize}>
              {file.size} Kb
            </div>
          </button>
        )
      })}
    </div>
  );
}

FileExplorer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
};

export default FileExplorer;
