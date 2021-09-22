import { Link } from 'react-router-dom';
import { BookInterface } from '../../interfaces';
import Cover from '../cover/Cover';
import './info.scss';

interface InfoProps {
  search: BookInterface;
}

const Info: React.FC<InfoProps> = ({ search }) => {
  console.log(search);
  return (
    <div className="info-wrapper">
      {!search.id ? (
        <div className="redirect">
          <span>Can't find your book? </span>
          <Link to="/addBook">Add it to our database!</Link>
        </div>
      ) : (
        <div className="book-info">
          <Cover book={search} />
          <div className="more-info">
            <h3>Pages: {search.page}</h3>
            <h3>About the book:</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
