import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Test from './collaborator.js'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={Test} />
    </div>
  </Router>
)

//routing

ReactDOM.render(
  routing,
  document.getElementById('root')
);
