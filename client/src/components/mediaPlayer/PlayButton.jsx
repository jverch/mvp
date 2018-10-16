const React = require('react');
const PropTypes = require('prop-types');

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    };

    this.play = this.play.bind(this);
  }

  componentDidMount() {
    const { currentSound } = this.props;
    // When sound is finished playing, update button
    currentSound.on('end', () => {
      this.setState({
        playing: false,
      });
    });
  }

  componentDidUpdate(prevProps) {
    const { currentSound } = this.props;
    if (currentSound !== prevProps.currentSound) {
      prevProps.currentSound.stop();
      // When sound is finished playing, update button
      currentSound.on('end', () => {
        this.setState({
          playing: false,
        });
      });
      // When given a new sound, update button
      this.setState({
        playing: false,
      });
    }
  }

  play() {
    const { currentSound } = this.props;
    if (!currentSound.playing()) {
      currentSound.play();
      this.setState({
        playing: true,
      });
    } else {
      currentSound.pause();
      this.setState({
        playing: false,
      });
    }
  }

  render() {
    const { playing } = this.state;
    if (!playing) {
      return <button type="submit" onClick={this.play}>{'>'}</button>;
    }
    return <button type="submit" onClick={this.play}>||</button>;
  }
}

PlayButton.propTypes = {
  currentSound: PropTypes.shape({
    play: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
  }).isRequired,
};

export default PlayButton;
