import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { BreadStage, ButterStage, StageButtons, IngredientsStage } from '@/components/stages';
import { OrderSummary } from '@/components/main';
import Preloader from '@/components/sharable/Preloader';

const OrderPage = ({ resetOrder, orderLoading }) => {
  return (
    <Fragment>
      <section className="all-stages">
        <BreadStage />
        <ButterStage />
        <IngredientsStage />
        {/* <StageButtons /> */}
      </section>
      {orderLoading && <Preloader />}
      <OrderSummary />
      <Link to="/">
        <button className="reset-button" onClick={ resetOrder }>
					Back to the main page
        </button>
      </Link>
    </Fragment>
  );
};

export default OrderPage;
