import React from "react";
import PropTypes from "prop-types";
import FileIcon from "../assets/images/file.svg";
import FolderIcon from "../assets/images/folder.svg";
import styles from "./FileExplorer.module.css";

function FileExplorer({ files = [], clickHandler, idActive }) {
  const handleClick = (file) => {
    clickHandler(file);
  };

  const arrayToTree = (items) => {
    const rootItems = [];
    const lookup = {};
    for (const item of items) {
      const itemId = item["id"];
      const parentId = item["parentId"];
      if (!lookup[itemId]) lookup[itemId] = { ["children"]: [] };
      lookup[itemId] = { ...item, ["children"]: lookup[itemId]["children"] };
      const TreeItem = lookup[itemId];
      if (!parentId) {
        rootItems.push(TreeItem);
      } else {
        if (!lookup[parentId]) lookup[parentId] = { ["children"]: [] };
        lookup[parentId]["children"].push(TreeItem);
      }
    }
    return rootItems;
  };

  const sortFiles = arrayToTree(files);
  const File = ({ file, deep = 0 }) => {
    
    return (
      <>
        <div
          className={`${styles.FileExplorerItem} ${
            idActive && idActive === file.id ? styles.Active : ""
          }`} style={{"--itemDepth":deep}}
          onClick={() => handleClick(file)}
        >
          <div className={styles.FileItem}>
            {file.kind === "folder" && (
              <FolderIcon className={styles.FileExplorerIcon} />
            )}
            {file.kind !== "folder" && (
              <FileIcon className={styles.FileExplorerIcon} />
            )}
            {file.name}
          </div>
          <div className={styles.FileExplorerSize}>
            {file.kind === "file" ? `${Math.ceil(file.size / 1000)} Kb` : ""}{" "}
          </div>
        </div>
        {file.children.length > 0 &&
          file.children.map((f) => (
            <>
              <File key={file.id} file={f} deep={deep+1} />
            </>
          ))}
      </>
    );
  };

  return (
    <div className={styles.FileExplorer}>
      {sortFiles.length === 0 && (
        <div className={styles.FileExplorerEmpty}>
          The root folder is empty.
        </div>
      )}
      {sortFiles.map((file) => (
        <>
          <File key={file.id} file={file} />
        </>
      ))}
    </div>
  );
}

FileExplorer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  clickHandler: PropTypes.func,
  idActive: PropTypes.number
};

export default FileExplorer;
