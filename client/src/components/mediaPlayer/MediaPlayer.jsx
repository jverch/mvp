import PlayButton from './PlayButton';
import SeekBar from './SeekBar';
import VolumeBar from './VolumeBar';
import styles from '../../styles/MediaPlayer.css';

const React = require('react');
const PropTypes = require('prop-types');
const { Howl, Howler } = require('howler');

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSound: null,
    };
  }

  componentDidUpdate(prevProps) {
    const { currentMeditation } = this.props;
    if (currentMeditation !== prevProps.currentMeditation) {
      const sound = new Howl({
        src: [currentMeditation.link],
        volume: 1.0,
      });
      sound.once('load', () => {
        this.setState({
          currentSound: sound,
        });
      });
    }
  }

  render() {
    const { currentSound } = this.state;
    const { currentMeditation } = this.props;
    if (currentSound) {
      return (
        <div className={styles.container}>
          Media player!
          <div>
            <div>
              Curr meditation:
              {currentMeditation.title}
            </div>
            <PlayButton currentSound={currentSound} />
            <div>
              <span>Volume:</span>
              <VolumeBar currentSound={currentSound} />
            </div>
            <div>
              <span>Seek:</span>
              <SeekBar currentSound={currentSound} />
            </div>
          </div>
        </div>
      );
    }
    return <div>No Media Loaded Yet!</div>;
  }
}

MediaPlayer.propTypes = {
  currentMeditation: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default MediaPlayer;
