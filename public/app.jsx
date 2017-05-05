var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Andrew';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
