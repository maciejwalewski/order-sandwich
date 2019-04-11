import * as firebase from 'firebase/app';
import 'firebase/auth';

import { config } from './config';

firebase.initializeApp(config);

const firebaseAuth = firebase.auth();

export const loginFirebase = async passes => {
  const [email, password] = passes;
  const loginAuth = await firebaseAuth.signInWithEmailAndPassword(email, password);
  return loginAuth;
};

export const signUpFirebase = async passes => {
  const [email, password] = passes;
  const signUpAuth = await firebaseAuth.createUserWithEmailAndPassword(email, password);
  return signUpAuth;
};
