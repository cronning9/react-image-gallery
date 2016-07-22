'use strict';

const React = require('react');

class LoginBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id="login">
        <button type="button">Login</button>
        <button type="button">Sign up</button>
      </div>
    )
    
  }
}

module.exports = LoginBox;