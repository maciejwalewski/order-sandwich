export const AUTH_LOGIN_TRY = 'AUTH_LOGIN_TRY';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';

export const authLogin = payload => ({ type: AUTH_LOGIN_TRY, payload });
