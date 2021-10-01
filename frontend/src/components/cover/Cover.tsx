import { NewBook } from '../../interfaces';
import './cover.scss';

interface CoverProps {
  book: NewBook;
  setSearchedBook: Function;
}

const Cover: React.FC<CoverProps> = ({ book, setSearchedBook }) => {
  const handleClick = () => {
    setSearchedBook(book);
  };

  return (
    <div className={`book ${book.color}`} onClick={() => handleClick()}>
      <p className="title">{book.title}</p>
      <p className="author">{book.author}</p>
      <p className="genre">{book.genre}</p>
    </div>
  );
};

export default Cover;
