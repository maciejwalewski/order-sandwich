import React from 'react';

import NewOrder from '../elements/NewOrder';
import Account from '../elements/Account';
import main_sandwich from '@/assets/main_sandwich.png';

const MainPage = () => {
  return (
    <main>
      <img className="main-page-image" src={ main_sandwich } />
      <Account />
      <NewOrder />
    </main>
  );
};

export default MainPage;
