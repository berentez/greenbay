import { connect } from 'react-redux';

import Recommendation from './Recommendation';
import { BookInterface } from '../../interfaces';

interface RecommState {
  recommendation: Array<BookInterface>;
}
const mapStateToProps = (state: RecommState) => {
  const { recommendation } = state;

  return {
    recommendation,
  };
};

export default connect(mapStateToProps)(Recommendation);
