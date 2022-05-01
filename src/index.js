import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import Index from './App';
import CollabEnv from './collaborator.js'
import NewSession from './newsession.js'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Index} />
	  <Route exact path="/:id" component={NewSession} />
      <Route exact path="/:id/:name" component={CollabEnv} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
