import React, { useState } from 'react';

const StageButtons = ({ currentStage, setStage, finishOrder, sandwichDetails }) => {
  const [{ minStep, maxStep }, setState] = useState({
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
        <button className="stages-nav__btn" onClick={ () => finishOrder(sandwichDetails) }>
					Finish order
        </button>
      )}
    </nav>
  );
};

export default StageButtons;
