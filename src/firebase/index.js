import firebase from 'firebase';
import { config } from './config';

firebase.initializeApp(config);

const firebaseAuth = firebase.auth();

export const loginFirebase = async passes => {
  const [email, password] = passes;
  const auth = await firebaseAuth.signInWithEmailAndPassword(email, password);
  return auth;
};
