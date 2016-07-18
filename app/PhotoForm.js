const React = require('react');

const data = require('./data/data');

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      caption: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // updates state of the form to reflect user input incrementally
  handleChange(key) {
    return function(e) {
      let state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const url = this.state.url;
    const caption = this.state.caption;
    data.push({url:     url,
               caption: caption});
    this.setState({ url: '', caption: '' });
    this.props.onPhotoSubmit({url: url, caption: caption})
    console.log(data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div><p>Photo URL:</p> <input type='text' 
                    value={this.state.url}
                    onChange={this.handleChange('url')} /></div>
        <div><p>Caption:</p> <input type='text' 
                  value={this.state.caption}
                  onChange={this.handleChange('caption')} /></div>
        <input type='submit' />
        
      </form>
    )
  }

}

module.exports = PhotoForm;