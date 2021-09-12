import { connect } from 'react-redux';

import Navbar from './Navbar';
import { Authorization } from '../../interfaces';

interface NavbarState {
  user: Authorization;
}

const mapStateToProps = (state: NavbarState) => {
  const { authorization } = state.user;

  return {
    authorization,
  };
};

export default connect(mapStateToProps)(Navbar);
