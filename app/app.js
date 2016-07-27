'use strict';

const React = require('react');

const PhotoGallery = require('./components/PhotoGallery/PhotoGallery');
const Header = require('./components/Header/Header');

const data = require('./data/data');

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <PhotoGallery photos={data} />
      </div>
    )
  }
}

module.exports = App;