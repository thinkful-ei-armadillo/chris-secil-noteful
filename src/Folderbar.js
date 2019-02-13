import React from 'react';
import {Link} from 'react-router-dom';

function Folderbar (props){
    return (
    <div className="folders">
        <ul>
            {this.props.folders.map((folder,index) => {
                return(
                    <li key={index}>
                    <Link to={`/${folder.id}`}>
                        <h2>{folder.name}</h2>
                    </Link>
                    </li>
                )
            })}
        </ul>
        <button>Add Folder</button>
    </div>);
}

export default Folderbar; 