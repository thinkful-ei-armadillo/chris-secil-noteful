import React, {Component} from 'react';
import Main from './Main.js';
import {Route} from 'react-router-dom'; 
import Store from './dummy-store.js'

class App extends Component {
  state = {...Store}
  render(){
  return (
    <main className='App'>
      <Route exact path="/" component={Main} />
    </main>
  )}
}

export default App;