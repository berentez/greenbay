import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookInterface } from '../../interfaces';
import Button from '../common/button/Button';
import Input from '../common/input/Input';
import Cover from '../cover';
import './info.scss';

interface InfoProps {
  search: BookInterface;
}

const Info: React.FC<InfoProps> = ({ search }) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const increaseYear = () => setYear(year + 1);
  const decreaseYear = () => setYear(year - 1);

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const addingBook = async () => {};

  const yearChange = (event: ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(event.target.value));
  };

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
            <form className={'bookshelf'} onSubmit={handleOnSubmit}>
              <p>When did you finish this book?</p>
              <Button label={'-'} onClick={decreaseYear} />
              <Input
                value={year.toString()}
                type="number"
                placeholder="year"
                onChange={yearChange}
              />
              <Button label={'+'} onClick={increaseYear} />
              <Button label={'Add to Bookhself'} onClick={addingBook} />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
