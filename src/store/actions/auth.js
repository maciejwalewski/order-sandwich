export const AUTH_LOGIN_TRY = 'AUTH_LOGIN_TRY';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const authLogin = payload => ({ type: AUTH_LOGIN_TRY, payload });

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_TRY = 'SIGN_UP_TRY';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const signUp = payload => ({ type: SIGN_UP_TRY, payload });
