import firebase from 'firebase';
import { config } from './config';

firebase.initializeApp(config);

const firebaseAuth = firebase.auth();

export default firebaseAuth;
