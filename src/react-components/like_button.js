'use strict';

// npx babel --watch src/react-components --out-dir dist/js --presets react-app/prod

const e = React.createElement;

class LikeButton extends React.Component {
  
  state = { liked: false };

  onClick = (e) => {
    this.setState({ liked: true });
  };

  render() {

    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={this.onClick}>
        Like
      </button>
    );
    
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);