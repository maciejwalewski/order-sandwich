import React, { useState, useEffect } from 'react';
import { ingredientFields } from '@/constants/fields';
import { StageButtons } from '@/components/stages';

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
      {ingredientFields.map(ing => (
        <div className="stage__choice">
          <span
            id={ ing.id }
            className="stage__label stage__label--addOne"
            onClick={ event => handleIngredient(event.target.id, true) }
          >
            {ing.label}
          </span>
          <button
            id={ ing.id }
            className="stage__removeOne"
            onClick={ event => handleIngredient(event.target.id, false) }
          >
						-1
          </button>
        </div>
      ))}
      <StageButtons />
    </section>
  );
};

export default IngredientsStage;
