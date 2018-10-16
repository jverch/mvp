const React = require('react');
const PropTypes = require('prop-types');

class VolumeBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVolume: 100
    };

    this.changeVolume = this.changeVolume.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentVolume } = this.state;
    const { currentSound } = this.props;
    if (currentSound !== prevProps.currentSound) {
      currentSound.volume(currentVolume / 100);
    }
  }

  changeVolume(event) {
    const { currentSound } = this.props;
    event.preventDefault();
    currentSound.volume(event.target.value / 100);
    this.setState({
      currentVolume: event.target.value,
    });
  }

  render() {
    const { currentVolume } = this.state;
    return <input type="range" min="0" max="100" value={currentVolume} onChange={this.changeVolume} />;
  }
}

VolumeBar.propTypes = {
  currentSound: PropTypes.shape({
    volume: PropTypes.func.isRequired,
  }).isRequired,
};

export default VolumeBar;
