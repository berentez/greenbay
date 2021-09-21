import { connect } from 'react-redux';

import Searchbar from './Searchbar';
import { Authorization, BookInterface } from '../../interfaces';
import { setSearchedBook } from '../../store/actions';

interface SearchbarState {
  user: Authorization;
}

const mapStateToProps = (state: SearchbarState) => {
  const { authorization } = state.user;

  return {
    authorization,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setSearchedBook: (book: BookInterface) => dispatch(setSearchedBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
