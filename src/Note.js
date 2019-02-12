import React, {Component} from 'react'; 

class Note extends Component {
    state = {};
    findId() {
        console.log(this.props);
    console.log(this.props.match.params.noteid);
    
    }
render(){
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
}

export default Note; 