import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import FileIcon from '../assets/images/file.svg';
import FolderIcon from '../assets/images/folder.svg';

import styles from "./FileExplorer.module.css";


function FileExplorer({ files = [], onClick }) {
  return (
    <div className={styles.FileExplorer}>
      {files.length === 0 &&
        <div className={styles.FileExplorerEmpty}>
          The root folder is empty.
        </div>
      }
      {files.length > 0 && 
        <ul>
          {files.map(file => {
            return( <li key={file.id}><FolderOrArchiver onClick={onClick} file={file} /></li>)
          })}
        </ul>
      }
    </div>
  );
}

const FolderOrArchiver = ({file, onClick}) => {
  const { selectedFile } = useSelector(store => store.filemanager);
  const handleClick = (file) => {
    onClick(file)
  }
  const selectedClass =  file.name === selectedFile?.name ? styles.FileExplorerItemSelected : ""
  return file.kind === 'folder' ? (
    <>
    <div className={`${styles.FileExplorerItem} ${selectedClass}`} key={file.id}>
      <div className={styles.FileExplorerName}>
        {file.kind === 'folder' &&
        <FolderIcon className={styles.FileExplorerIcon} />
      }
      {file.name}
      </div>
    </div>
      { file?.children.length > 0 && 
        <ul>
          {file.children.map(item => <li  key={item.id}><FolderOrArchiver onClick={onClick}  file={item} /></li>)}
        </ul>
      } 
    </>
  ) :
  (

      <button onClick={() => handleClick(file)} className={`${styles.FileExplorerItem} ${selectedClass}`} key={file.id}>
        <div className={styles.FileExplorerName}>
          <FileIcon className={styles.FileExplorerIcon} />
          {file.name}
        </div>
        
        <div className={styles.FileExplorerSize}>
          {file.size} Kb
        </div>
      </button>

  )
}

FileExplorer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
};

export default FileExplorer;
