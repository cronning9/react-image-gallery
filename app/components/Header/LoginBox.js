'use strict';

const React = require('react');

// this will certainly have state -- will display different status
// depending on whether user is logged in or not
// perhaps not though -- perhaps user info will be a set of props,
// and the display will simply depend on whether the props are defined
// or not.
const LoginBox = ({user}) => {
  
  const openMenu = () => {
    document.getElementById('menu-content').classList.toggle("show");
  };
  
  let display;
  if (user) {
    display = <div id="user">
                <button type="button" onClick={openMenu}>{user.username}</button>
                <div id="menu-content" className="content">
                  <a href="#">My Gallery</a>
                  <a href="#">Explore</a>
                  <a href="#">Profile</a>
                  <a href="#">Log Out</a>
                </div>
              </div>
  } else {
    display = <div id="login">
                <button type="button">Login</button>
                <button type="button">Sign up</button>
              </div>
  }
  
  return display;
}

module.exports = LoginBox;