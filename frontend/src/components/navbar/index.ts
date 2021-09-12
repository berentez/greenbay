import { connect } from 'react-redux';

import Navbar from './Navbar';
import { Authorization } from '../../interfaces';
import { logoutUser } from '../../store/actions';

interface NavbarState {
  user: Authorization;
}

const mapStateToProps = (state: NavbarState) => {
  const { authorization } = state.user;

  return {
    authorization,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
