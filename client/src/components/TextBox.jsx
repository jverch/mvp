const React = require('react');
const { Howl, Howler } = require('howler');

const TextBox = (props) => {
  const { currentMeditation } = props;
  console.log('curr', currentMeditation);
  
  return (
    <div>
      Media player!
      <div>
        Curr meditation:
        <span>{currentMeditation}</span>
      </div>
    </div>
  );
};

export default TextBox;
