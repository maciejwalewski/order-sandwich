import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <section className="account">
      <Link to="/account">
        <button className="account__button account__button--small">Account</button>
      </Link>
    </section>
  );
};

export default Account;
