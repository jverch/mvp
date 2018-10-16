import MeditationItem from './MeditationItem';

const React = require('react');
const PropTypes = require('prop-types');

const MeditationList = (props) => {
  const { meditations, selectMeditation } = props;
  if (meditations.length) {
    return (
      <div>
        <div>
          Click on a meditation to load it!
        </div>
        {meditations.map(meditation => (
          <MeditationItem
            key={meditation.id}
            meditation={meditation}
            selectMeditation={selectMeditation}
          />
        ))}
      </div>
    );
  }
  return null;
};

MeditationList.propTypes = {
  meditations: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectMeditation: PropTypes.func.isRequired,
};

export default MeditationList;
