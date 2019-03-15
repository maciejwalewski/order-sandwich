import React, { useState } from 'react';
import firebaseAuth from '@/firebase';

const logIn = () => {
  firebaseAuth.signInWithEmailAndPassword('maciekwalewski@gmail.com', '12356').catch(err => alert(err));
};

const AccountPage = () => {
  return (
    <section className="account-panel">
      <form className="account-form">
        <input className="account-form__input" required type="email" />
        <input className="account-form__input" required type="password" />
        <button className="account-form__button" onClick={ logIn } type="submit">
					Log in
        </button>
      </form>
    </section>
  );
};

export default AccountPage;
