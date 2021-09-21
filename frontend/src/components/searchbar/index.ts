import { connect } from 'react-redux';

import Searchbar from './Searchbar';
import { Authorization } from '../../interfaces';

interface SearchbarState {
  user: Authorization;
}

const mapStateToProps = (state: SearchbarState) => {
  const { authorization } = state.user;

  return {
    authorization,
  };
};

export default connect(mapStateToProps)(Searchbar);
