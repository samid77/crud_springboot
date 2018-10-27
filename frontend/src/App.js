import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';
import Login from './components/Login';
import NavigasiBar from './components/Navigasibar';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigasiBar />
        <Route exact path="/" component={Home}/>
        <Route path="/create" component={Create}/>
        <Route path="/edit/:id" component={Edit}/>
        <Route path="/show/:id" component={Show}/>
        <Route path="/logout" component={Login}/>
      </div>
    );
  }
}

export default App;
