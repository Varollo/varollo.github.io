import folderIcon from "/folder-icon.svg"

import "./Folder.css";

interface Props {
  name: string;
}

const Folder = ({name}: Props) => {
  return (
    <div className="folder">
      <img src={folderIcon} alt="" />
      <p>{name}</p>
    </div>
  )
}

export default Folder