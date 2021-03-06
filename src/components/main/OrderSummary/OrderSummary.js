import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OrderSummary = ({ 
  sandwichDetails,
  orderSuccess,
  orderError
}) => {
  const { bread, butter, ingredients } = sandwichDetails;
  const [orderOpened, toggleOrder] = useState(false);
  const [orderUpdated, setUpdated] = useState(false);

  const [{ ingredientsKeys }, setState] = useState({
    ingredientsKeys: []
  });

  useEffect(() => {
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false);
    }, 300);
  }, [sandwichDetails])

  useEffect(() => {
    if (ingredients) {
      const keys = Object.keys(ingredients);
      setState(state => ({ ...state, ingredientsKeys: keys }));
    }
  }, [ingredients]);

  return (
    <section className={ `order-summary ${(orderSuccess || orderError || orderOpened) && 'order-summary--opened'}` }>
      <header onClick={ () => toggleOrder(!orderOpened) } className={ `order-summary__header ${orderUpdated && 'order-summary__header--glow'}` }>
				Order Summary
      </header>
      {(orderSuccess || orderError) && (
        <span className={ `${orderSuccess ? 'order-summary__success' : 'order-summary__error'}` }>
          {orderSuccess || orderError}
        </span>
      )}
      {bread && (
        <div className="order-summary__line">
          <span>Bread:</span>
          <span>{bread}</span>
        </div>
      )}
      {(butter === true || butter === false) && (
        <div className="order-summary__line">
          <span>Butter:</span>
          <span>{butter ? 'naturally yes' : 'please no!'}</span>
        </div>
      )}
      {ingredientsKeys.map(key => {
        if (ingredients[key] > 0) {
          return (
            <div key={ key } className="order-summary__line">
              <span>{key}:</span>
              <span>{ingredients[key]} pieces</span>
            </div>
          );
        }
      })}
    </section>
  );
};

OrderSummary.propTypes = {
  sandwichDetails: PropTypes.object.isRequired,
  orderSuccess: PropTypes.string.isRequired,
  orderError: PropTypes.string.isRequired
}

export default OrderSummary;
