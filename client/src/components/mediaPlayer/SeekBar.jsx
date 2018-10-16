const React = require('react');
const PropTypes = require('prop-types');

class SeekBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 0,
      totalDuration: props.currentSound.duration(),
    };

    this.updateTime = this.updateTime.bind(this);
    this.seek = this.seek.bind(this);
  }

  // While the seek bar exists, it attemps to update once per second
  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps) {
    const { currentSound } = this.props;
    if (currentSound !== prevProps.currentSound) {
      this.setState({
        currentTime: 0,
        totalDuration: currentSound.duration(),
      });
    }
  }

  updateTime() {
    const { currentSound } = this.props;
    this.setState({
      currentTime: currentSound.seek(),
    });
  }

  seek(event) {
    const { currentSound } = this.props;
    event.preventDefault();
    currentSound.seek(event.target.value);
    this.updateTime();
  }

  render() {
    const { currentTime, totalDuration } = this.state;
    return <input type="range" min="0" max={totalDuration} value={currentTime} onChange={this.seek} />;
  }
}

SeekBar.propTypes = {
  currentSound: PropTypes.shape({
    duration: PropTypes.func.isRequired,
    seek: PropTypes.func.isRequired,
  }).isRequired,
};

export default SeekBar;
