import { connect } from 'react-redux';

import AccountPage from './AccountPage';
import { authLogin, signUp } from '@/store/actions/auth';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    loading: state.auth.loading,
    registerLoading: state.auth.registerLoading,
    registerSuccess: state.auth.registerSuccess,
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authLogin: (email, password) => dispatch(authLogin({ email, password })),
    signUp: (email, password) => dispatch(signUp({ email, password }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);
