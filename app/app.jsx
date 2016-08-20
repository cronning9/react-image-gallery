'use strict';

const React = require('react');

const PhotoGallery = require('./components/PhotoGallery/PhotoGallery');
const PhotoForm = require('./components/PhotoGallery/PhotoForm');
const Header = require('./components/Header/Header');
const LoginBox = require('./components/Header/LoginBox');

const data = require('./data/data');

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: data,
      user:  {
        username: "Taylor Swift"
      }
    }

    this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
  }

  handlePhotoSubmit() {
    this.setState({photos: this.state.photos});
  }

  render() {
    console.log('lol world');
    return (
      <div className='app'>
        <Header>
          <LoginBox user={this.state.user} />
        </Header>
        <PhotoGallery photos={this.state.photos}>
          <PhotoForm onPhotoSubmit={this.handlePhotoSubmit}/>
        </PhotoGallery>
      </div>
    )
  }
}

module.exports = App;