import React, { useState, useEffect } from 'react';
import { ingredientFields } from '@/constants/fields';
import { StageButtons } from '@/components/stages';
import ingredients_choice from '@/assets/ingredients.png';
import PropTypes from 'prop-types';

const IngredientsStage = ({ 
  currentStage,
  setIngredients,
  ingredients
}) => {
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
      <img src={ ingredients_choice } className="stage__image" />
      <span className="stage__question indie">Add your ingredients!</span>
      {ingredientFields.map(ing => (
        <div key={ ing.id } className="stage__choice">
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

IngredientsStage.propTypes = {
  currentStage: PropTypes.number.isRequired,
  setIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.object.isRequired
}

export default IngredientsStage;
