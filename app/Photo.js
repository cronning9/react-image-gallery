const React =   require('react');

const unliked = require('./assets/heart.jpg');
const liked =   require('./assets/red-heart.jpg');

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
    }
    this.toggleLiked = this.toggleLiked.bind(this);
  }

  render() { 
    return (<div className="photo">
              <h3>{this.props.caption}</h3>
              <img src={this.props.src} />
              <img src={this.state.liked ? liked : unliked } onClick={this.toggleLiked} className="like-button"></img>
            </div>
      )
  }

  toggleLiked(event) {
    event.preventDefault();
    console.log('clicked');
    this.setState({ liked: !this.state.liked });
    
  }
}

module.exports = Photo;