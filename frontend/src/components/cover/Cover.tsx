import { NewBook } from '../../interfaces';
import './cover.scss';

interface CoverProps {
  book: NewBook;
}

const Cover: React.FC<CoverProps> = ({ book }) => {
  return (
    <div className={`book ${book.color}`}>
      <p className="title">{book.title}</p>
      <p className="author">{book.author}</p>
      <p className="genre">{book.genre}</p>
    </div>
  );
};

export default Cover;
