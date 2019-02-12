import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 

class Note extends Component {

render(){
    return(
        <div>
            <Link to={`/notes/${note.id}`}>
                <h2>{note.name}</h2>
                <p>Date modified {note.modified}</p>
                <p>{note.content}</p>
                <button>Delete Note</button>
            </Link>
        </div>
    )
}
}

export default Note; 