import React, { useState, useEffect } from 'react';

const IngredientsStage = ({ currentStage, setIngredients, ingredients }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (currentStage === 3) {
      setTimeout(() => {
        setVisible(true);
      }, 50);
    } else {
      setVisible(false);
    }
  }, [currentStage]);

  const handleIngredient = (id, bool) => {
    const newIngredients = {
      ...ingredients,
      [id]: ingredients[id] ? ingredients[id] + (bool ? 1 : -1) : bool ? 1 : 0
    };

    // TODO: try to move this to redux-thunk
    setIngredients(newIngredients);
  };

  return (
    <section className={ visible ? 'stage' : 'stage stage--hidden' }>
      <div className="stage__choice">
        <span
          id="ham"
          className="stage__label stage__label--addOne"
          onClick={ event => handleIngredient(event.target.id, true) }
        >
					HAM
        </span>
        <button
          id="ham"
          className="stage__removeOne"
          onClick={ event => handleIngredient(event.target.id, false) }
        >
					-1
        </button>
      </div>
      <div className="stage__choice">
        <span
          id="cheese"
          className="stage__label stage__label--addOne"
          onClick={ event => handleIngredient(event.target.id, true) }
        >
					CHEESE
        </span>
        <button
          id="cheese"
          className="stage__removeOne"
          onClick={ event => handleIngredient(event.target.id, false) }
        >
					-1
        </button>
      </div>
      <div className="stage__choice">
        <span
          id="tomato"
          className="stage__label stage__label--addOne"
          onClick={ event => handleIngredient(event.target.id, true) }
        >
					TOMATO
        </span>
        <button
          id="tomato"
          className="stage__removeOne"
          onClick={ event => handleIngredient(event.target.id, false) }
        >
					-1
        </button>
      </div>
    </section>
  );
};

export default IngredientsStage;
