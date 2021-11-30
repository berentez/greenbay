import { connect } from 'react-redux';
import { Authorization, BookInterface } from '../../interfaces';
import Info from './Info';

interface InfoState {
  search: BookInterface;
  user: Authorization;
}

const mapStateToProps = (state: InfoState) => {
  const search = state.search;
  const { authorization } = state.user;

  return {
    search,
    authorization,
  };
};

export default connect(mapStateToProps)(Info);
