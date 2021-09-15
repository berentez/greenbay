import { connect } from 'react-redux';

import Login from './Login';

import { saveToken } from '../../store/actions';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    saveToken: (token: string) => dispatch(saveToken(token)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
