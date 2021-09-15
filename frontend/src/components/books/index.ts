import { connect } from 'react-redux';

import Books from './Books';
import { Authorization, BookData } from '../../interfaces';
import { displayBooks } from '../../store/actions';

interface BooksState {
  user: Authorization;
  recommendation: BookData;
}

const mapStateToProps = (state: BooksState) => {
  const { authorization } = state.user;
  const recommendation = state.recommendation;

  return {
    authorization,
    recommendation,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setBookRecommendation: (books: BookData) => dispatch(displayBooks(books)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
