import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  BreadStage,
  ButterStage,
  StageButtons
} from '@/components/stages';

const Order = ({ resetOrder }) => {
  return (
    <Fragment>
      <section className="all-stages">
        <BreadStage />
        <ButterStage />
        <StageButtons />
      </section>
      <Link to="/">
        <button className="reset-button" onClick={ resetOrder }>
          Back to the main page
        </button>
      </Link>
    </Fragment>
  );
};

export default Order;
