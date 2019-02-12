import React, {Component} from 'react';
import Main from './Main.js';
import {Route} from 'react-router-dom'; 
import Store from './dummy-store.js';
import Folderbar from './Folderbar.js';


class App extends Component {
  state = {...Store}

  extendNote(id){
    return (
      <Note note={this.state.notes.filter((note) => note.id === id 
        )}  />
    )
  }

  render(){
  return (
    <main className='App'>
      <header>
        <h1>Noteful</h1>
      </header>
      <Route exact path="/" 
      render = {() => <Main notes={this.state.notes}/>} />
      <Route exact path="/"
      render = {()=> <Folderbar folders={this.state.folders}/>} />
    </main>
  )}
}

export default App;