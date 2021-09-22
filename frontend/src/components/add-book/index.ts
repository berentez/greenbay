import { connect } from 'react-redux';

import AddBook from './AddBook';
import { Authorization } from '../../interfaces';

interface AddBookState {
  user: Authorization;
}

const mapStateToProps = (state: AddBookState) => {
  const { authorization } = state.user;

  return {
    authorization,
  };
};

export default connect(mapStateToProps)(AddBook);
