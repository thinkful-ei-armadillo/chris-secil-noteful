import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Folderbar extends Component{
  render(){
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
}
export default Folderbar; 