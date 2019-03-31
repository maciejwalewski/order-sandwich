import React, { useState, useEffect } from 'react';

const OrderSummary = ({ sandwichDetails, orderSuccess, orderError }) => {
  const { bread, butter, ingredients } = sandwichDetails;

  const [{ ingredientsKeys }, setState] = useState({
    ingredientsKeys: []
  });

  useEffect(() => {
    if (ingredients) {
      const keys = Object.keys(ingredients);
      setState(state => ({ ...state, ingredientsKeys: keys }));
    }
  }, [ingredients]);

  return (
    <section className={ `order-summary ${(orderSuccess || orderError) && 'order-summary--finished'}` }>
      <header className="order-summary__header">Order Summary</header>
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
            <div className="order-summary__line">
              <span>{key}:</span>
              <span>{ingredients[key]}</span>
            </div>
          );
        }
      })}
    </section>
  );
};

export default OrderSummary;
