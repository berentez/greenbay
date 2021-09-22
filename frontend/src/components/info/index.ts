import { connect } from 'react-redux';
import { BookInterface } from '../../interfaces';
import Info from './Info';

interface InfoState {
  search: BookInterface;
}

const mapStateToProps = (state: InfoState) => {
  const search = state.search;

  return {
    search,
  };
};

export default connect(mapStateToProps)(Info);
