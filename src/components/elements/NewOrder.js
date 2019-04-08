import React from 'react';
import { Link } from 'react-router-dom';

const NewOrder = () => {
  return (
    <section className="create-new">
      <h2 className="create-new__header">Mmmm... Yummy!</h2>
      <Link to="/order">
        <button className="create-new__button">Create Sandwich</button>
      </Link>
    </section>
  );
};

export default NewOrder;
