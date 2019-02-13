import React, {Component} from 'react';
import Main from './Main.js';
import {Route} from 'react-router-dom'; 
import Store from './dummy-store.js';
import Folderbar from './Folderbar.js';
import Note from './Note';


class App extends Component {
  state = {...Store}

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
        <Route exact path="/:folderid"
        render = {(props)=> <Folderbar folders={this.state.folders.filter(folder => folder.id === props.match.params.id)}
        notes={this.state.notes.filter(note => note.folderId === props.match.params.folderId)} />}/>
        <Route exact path="/notes/:noteid"
        render = {(props)=> <Note notes={this.state.notes}/>} />
    </main>
  )}
}

export default App;