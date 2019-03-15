import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AccountPage = ({ loggedIn, loading, authLogin, signUp, registerLoading, registerSuccess, currentUser }) => {
  const [{ loginEmail, loginPassword, registerEmail, registerPassword }, setCreds] = useState({
    loginEmail: '',
    loginPassword: '',
    registerEmail: '',
    registerPassword: ''
  });

  const [signPanelVisible, setSignPanel] = useState(false);

  const handleChange = e => {
    const { id, value } = e.target;
    setCreds(state => ({ ...state, [id]: value }));
  };

  return (
    <section className="account-panel">
      {currentUser && <header className="account-panel__username">Nice to see You back {currentUser} !</header>}
      <form className="account-form">
        <input
          onChange={ e => handleChange(e) }
          className="account-form__input"
          id="loginEmail"
          required
          placeholder="E-mail"
          type="email"
        />
        <input
          onChange={ e => handleChange(e) }
          className="account-form__input"
          id="loginPassword"
          required
          placeholder="Password"
          type="password"
        />
        <button
          className="account-form__button"
          onClick={ () => authLogin(loginEmail, loginPassword) }
          type="submit"
        >
					Log in
        </button>
        {loading && <span>loading</span>}
        {loggedIn && <span>Logged in!</span>}
      </form>
      {/* {!signPanelVisible && ( */}
      <button
        className="account-form__button account-form__button--create"
        onClick={ () => setSignPanel(!signPanelVisible) }
      >
				Create account
      </button>
      {/* )} */}
      <form className={ signPanelVisible ? 'account-form' : 'account-form account-form--hidden' }>
        <input
          onChange={ e => handleChange(e) }
          className="account-form__input"
          id="registerEmail"
          placeholder="E-mail"
          required
          type="email"
        />
        <input
          onChange={ e => handleChange(e) }
          className="account-form__input"
          id="registerPassword"
          placeholder="Password"
          required
          type="password"
        />
        <button
          className="account-form__button"
          onClick={ () => signUp(registerEmail, registerPassword) }
          type="submit"
        >
					Sign up
        </button>
        {registerLoading && <span>creation in process</span>}
        {registerSuccess && <span>Account created! :)</span>}
      </form>
      <Link to="/">
        <button className="reset-button">Back to the main page</button>
      </Link>
    </section>
  );
};

export default AccountPage;
