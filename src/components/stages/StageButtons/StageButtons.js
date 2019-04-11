import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StageButtons = ({ 
  currentStage,
  setStage,
  finishOrder
}) => {
  const [{ minStep, maxStep }] = useState({
    minStep: 1,
    maxStep: 3
  });

  const changeStage = bool => {
    if (bool && currentStage < maxStep) {
      setStage(1);
    } else if (!bool && currentStage > minStep) {
      setStage(-1);
    }
  };

  return (
    <nav className="stages-nav">
      {currentStage !== minStep && (
        <button className="stages-nav__btn" onClick={ () => changeStage(false) }>
					Prev
        </button>
      )}
      {currentStage !== maxStep && (
        <button className="stages-nav__btn" onClick={ () => changeStage(true) }>
					Next
        </button>
      )}
      {currentStage === maxStep && (
        <button className="stages-nav__btn" onClick={ () => finishOrder() }>
					Finish order
        </button>
      )}
    </nav>
  );
};

StageButtons.propTypes = {
  currentStage: PropTypes.number.isRequired,
  setStage: PropTypes.func.isRequired,
  finishOrder: PropTypes.func.isRequired
}

export default StageButtons;
