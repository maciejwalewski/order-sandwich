import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebaseAuth from '@/firebase';

const AccountPage = ({ loggedIn, loading, authLogin }) => {
  const [{ email, password }, setCreds] = useState({
    email: '',
    password: ''
  });

  // firebaseAuth.signInWithEmailAndPassword(email, password).catch(err => alert(err));

  const handleChange = e => {
    const { id, value } = e.target;
    setCreds(state => ({ ...state, [id]: value }));
  };

  return (
    <section className="account-panel">
      <form className="account-form">
        <input
          onChange={ e => handleChange(e) }
          className="account-form__input"
          id="email"
          required
          type="email"
        />
        <input
          onChange={ e => handleChange(e) }
          className="account-form__input"
          id="password"
          required
          type="password"
        />
        <button className="account-form__button" onClick={ () => authLogin(email, password) } type="submit">
					Log in
        </button>
        {loading && <span>loading</span>}
        {loggedIn && <span>Logged in!</span>}
      </form>
      <Link to="/">
        <button className="reset-button">Back to the main page</button>
      </Link>
    </section>
  );
};

export default AccountPage;
