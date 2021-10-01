import { connect } from 'react-redux';

import Cover from './Cover';
import { setSearchedBook } from '../../store/actions';
import { BookInterface } from '../../interfaces';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setSearchedBook: (book: BookInterface) => dispatch(setSearchedBook(book)),
  };
};

export default connect(null, mapDispatchToProps)(Cover);
