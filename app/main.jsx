'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./app.jsx');

require('./style/style.css');

ReactDOM.render(
  <App />, document.getElementById('container')
)