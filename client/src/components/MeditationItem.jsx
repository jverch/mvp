const React = require('react');
const PropTypes = require('prop-types');

const MeditationItem = (props) => {
  const { meditation, selectMeditation } = props;
  return (
    <div>
      <button type="submit" onClick={() => selectMeditation(meditation)}>{meditation.title}</button>
    </div>
  );
};

MeditationItem.propTypes = {
  meditation: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  selectMeditation: PropTypes.func.isRequired,
};

export default MeditationItem;
