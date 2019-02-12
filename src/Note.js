import React from 'react'; 


function Note(props){
    return(
        <div>
            <ul>
                <p>Notes should go in here</p>
            {/* {props.notes.map(note => {
                return (
                    <li>
                        <h2>{note.name}</h2>
                        <p>Date modified {note.modified}</p>
                    </li> */}
                );
            })
            }
            </ul>
        </div>
    )
}

export default Note; 