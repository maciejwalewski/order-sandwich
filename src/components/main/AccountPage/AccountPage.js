import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '@/components/sharable/Preloader';
import { FaChevronLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';

const AccountPage = ({ 
  loggedIn,
  loading,
  authLogin,
  signUp,
  registerLoading,
  registerSuccess,
  currentUser
}) => {
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

  const authLoginSubmit = () => {
    event.preventDefault();
    authLogin(loginEmail, loginPassword);
  };

  const signUpSubmit = () => {
    event.preventDefault();
    signUp(registerEmail, registerPassword);
  };

  return (
    <section className="account-panel">
      {currentUser && <header className="account-panel__username">Nice to see You back {currentUser} !</header>}
      {!loggedIn && (
        <Fragment>
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
            <button className="account-form__button" onClick={ () => authLoginSubmit() } type="submit">
							Log in
            </button>
            {loading && <Preloader />}
          </form>
          <button
            className="account-form__button account-form__button--create"
            onClick={ () => setSignPanel(!signPanelVisible) }
          >
						Create account
          </button>
          <form
            className={
              signPanelVisible
                ? 'account-form account-form--register'
                : 'account-form account-form--register account-form--hidden'
            }
          >
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
            <button className="account-form__button" onClick={ () => signUpSubmit() } type="submit">
							Sign up
            </button>
            {registerLoading && <Preloader />}
            {registerSuccess && <span>Account created! :)</span>}
          </form>
        </Fragment>
      )}
      <Link to="/">
        <button className="reset-button">
          <FaChevronLeft />
        </button>
      </Link>
    </section>
  );
};

AccountPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  authLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  registerLoading: PropTypes.bool.isRequired,
  registerSuccess: PropTypes.bool.isRequired,
  currentUser: PropTypes.string.isRequired,
}

export default AccountPage;
