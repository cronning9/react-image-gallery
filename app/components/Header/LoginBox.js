'use strict';

const React = require('react');

// this will certainly have state -- will display different status
// depending on whether user is logged in or not
// perhaps not though -- perhaps user info will be a set of props,
// and the display will simply depend on whether the props are defined
// or not.
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