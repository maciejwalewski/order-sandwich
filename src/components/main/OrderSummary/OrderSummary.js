import React, { useState, useEffect } from 'react';

const OrderSummary = ({ sandwichDetails }) => {
  console.log('sandwichDetails', sandwichDetails);
  const { bread, butter, ingredients } = sandwichDetails;
  const ingredientsKeys = Object.keys(ingredients);

  return (
    <section className="order-summary">
      <header className="order-summary__header">Order Summary</header>
      <div className="order-summary__line">
        <span>Bread:</span>
        <span>{bread}</span>
      </div>
      <div className="order-summary__line">
        <span>Butter:</span>
        <span>{butter ? 'naturally yes' : 'please no!'}</span>
      </div>
      {ingredientsKeys.map(key => (
        <div className="order-summary__line">
          <span>{key}:</span>
          <span>{ingredients[key]}</span>
        </div>
      ))}
    </section>
  );
};

export default OrderSummary;
