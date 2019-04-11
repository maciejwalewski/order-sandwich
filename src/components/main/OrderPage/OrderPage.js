import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { BreadStage, ButterStage, IngredientsStage } from '@/components/stages';
import { OrderSummary } from '@/components/main';
import Preloader from '@/components/sharable/Preloader';

const OrderPage = ({ 
  resetOrder,
  orderLoading
}) => {
  return (
    <Fragment>
      <section className="all-stages">
        <div className="all-stages__wrapper">
          <BreadStage />
          <ButterStage />
          <IngredientsStage />
        </div>
      </section>
      {orderLoading && <Preloader />}
      <OrderSummary />
      <Link to="/">
        <button className="reset-button" onClick={ resetOrder }>
          <FaChevronLeft />
        </button>
      </Link>
    </Fragment>
  );
};

OrderPage.propTypes = {
  resetOrder: PropTypes.func.isRequired,
  orderLoading: PropTypes.bool.isRequired
}

export default OrderPage;
