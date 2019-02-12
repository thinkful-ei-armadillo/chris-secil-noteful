import React, {Component} from 'react';
import Main from './Main.js';
import {Route, Switch} from 'react-router-dom'; 
import Store from './dummy-store.js';
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
      <Route exact path="/" Component={Folders} />
      {/* <Route path="/notes" Component={Note}/> */}
    </main>
  )}
}

export default App;