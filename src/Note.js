import React from 'react'; 

function Note (props) {
    console.log(this.props);
    console.log(this.props.match.params.noteid);
    
    const note=this.props.notes.find(note => 
        note.id === this.props.match.params.noteid);
        console.log(note);
    return(
        <div>
            <h2>{note.name}</h2>
            <p>Date modified {note.modified}</p>
            <p>{note.content}</p>
            <button>Delete Note</button>
        </div>
    )
}

export default Note; 