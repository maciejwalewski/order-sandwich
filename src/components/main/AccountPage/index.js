import { connect } from 'react-redux';

import AccountPage from './AccountPage';
import { authLogin } from '@/store/actions/auth';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authLogin: (email, password) => dispatch(authLogin({ email, password }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);
