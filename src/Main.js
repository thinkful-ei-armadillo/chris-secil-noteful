import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 

class Main extends Component{
    render(){
    return (
        <div>
            <main>
                <ul>
                    {this.props.notes.map((note, index) => {
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
}

export default Main; 