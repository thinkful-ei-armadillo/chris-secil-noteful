import React from 'react'; 
import {Link} from 'react-router-dom'; 

function Main (props){
    return (
        <div>
            <main>
                <ul>
                    {props.notes.map((note, index) => {
                    return (
                            <li key={index} >
                            <Link to={`/notes/${note.id}`}>
                                <h2>{note.name}</h2>
                            </Link>
                                <p>Date modified {note.modified}</p>
                                <button>Delete Note</button>
                            </li>
                )       
                    })} 
                </ul>
                <button>Add note</button>
            </main>
        </div>
    )
}

export default Main; 