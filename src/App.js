import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' />
      </Switch>
    </HashRouter>
  );
}

export default App;
