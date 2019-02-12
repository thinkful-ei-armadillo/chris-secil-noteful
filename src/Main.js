import React from 'react'; 
import Note from './Note';

function Main(props){
    const notes = props.state.notes;
    // const folders = props.state.folders;
    return (
        <div>
            <main>
                {/* {props.notes.map(note => {
                return (
                    <li>
                        <h2>{note.name}</h2>
                        <p>Date modified {note.modified}</p>
                    </li> */}
                {notes}
                <button>Add note</button>
            </main>
            <div className="folders">
                <ul>
                {/* {folders.map(folder => {
                    return (
                        <li>
                            {folder.name}
                        </li>
                    ); */}
                })}
                </ul>
                <button>Add Folder</button>
            </div>
        </div>
    )
}

export default Main; 