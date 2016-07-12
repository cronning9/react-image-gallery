'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "Hello world!"
    }
  }

  render() {
    return (
      <h2>Hello {this.props.name}</h2>
    )
  }
}

ReactDOM.render(
  <App name="Chris"/>, document.getElementById('container')
)