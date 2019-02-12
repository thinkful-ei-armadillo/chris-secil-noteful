import React from 'react'; 

function Main(props){
    return (
        <div>
            <main>
                <ul>
                    {props.notes.map((note, index) => {
                    return (
                        <li key={index} onClick={()=> extendNote(note.id)}>
                            <h2>{note.name}</h2>
                            <p>Date modified {note.modified}</p>
                        </li>)
                    })} 
                </ul>
                <button>Add note</button>
            </main>
        </div>
    )
}

export default Main; 