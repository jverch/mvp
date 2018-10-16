import MediaPlayer from './mediaPlayer/MediaPlayer';
import MeditationList from './MeditationList';

const React = require('react');
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meditations: [],
      currentMeditation: {
        title: 'No meditation selected yet!',
        link: 'n/a',
      },
    };

    this.selectMeditation = this.selectMeditation.bind(this);
  }

  componentDidMount() {
    axios.get('./meditations')
      .then((res) => {
        this.setState({
          meditations: res.data,
          currentMeditation: res.data[0],
        });
      })
      .catch((err) => {
        console.error('Error in axios get', err);
      });
  }

  selectMeditation(meditation) {
    this.setState({
      currentMeditation: meditation,
    });
  }

  render() {
    const { currentMeditation, meditations } = this.state;
    return (
      <div>
        <MediaPlayer currentMeditation={currentMeditation} />
        <MeditationList meditations={meditations} selectMeditation={this.selectMeditation} />
      </div>
    );
  }
}

export default App;
