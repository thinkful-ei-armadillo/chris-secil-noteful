import React from 'react';

function Folderbar(props){
    return (
    <div className="folders">
        <ul>
            {props.folders.map((folder,index) => {
                return(
                    <li key={index}>
                        <h2>{folder.name}</h2>
                    </li>
                )
            })}
        </ul>
        <button>Add Folder</button>
    </div>)
}

export default Folderbar; 