'use strict';

const React = require('react');

const PhotoGallery = require('./components/PhotoGallery/PhotoGallery');
const Header = require('./components/Header/Header');
const LoginBox = require('./components/Header/LoginBox');

const data = require('./data/data');

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: data,
      user: null
    }
  }

  render() {
    return (
      <div className='app'>
        <Header>
          <LoginBox user={this.state.user} />
        </Header>
        <PhotoGallery photos={this.state.photos} />
      </div>
    )
  }
}

module.exports = App;