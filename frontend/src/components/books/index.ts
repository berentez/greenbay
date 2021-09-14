import { connect } from 'react-redux';

import Books from './Books';
import { Authorization, BookData, BookInterface } from '../../interfaces';
import { displayBooks } from '../../store/actions';

interface BooksState {
  user: Authorization;
}

const mapStateToProps = (state: BooksState) => {
  const { authorization } = state.user;

  return {
    authorization,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setBookRecommendation: (books: BookData) => dispatch(displayBooks(books)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
