import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookInterface } from '../../interfaces';
import Button from '../common/button/Button';
import Input from '../common/input/Input';
import { StarRating } from '../common/star-rating/StarRating';
import Cover from '../cover';
import './info.scss';

interface InfoProps {
  search: BookInterface;
}

const Info: React.FC<InfoProps> = ({ search }) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const increaseYear = () => {
    let date = new Date();
    if (year < date.getFullYear()) {
      setYear(year + 1);
    }
  };

  const decreaseYear = () => setYear(year - 1);

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const addingBook = async () => {};
  const addingCurrent = async () => {};

  const yearChange = (event: ChangeEvent<HTMLInputElement>) => {
    let date = new Date();
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
            <form className={'bookshelf'} onSubmit={handleOnSubmit}>
              <p>When did you finish this book?</p>
              <Button className="operator" label={'-'} onClick={decreaseYear} />
              <Input
                value={year.toString()}
                type="number"
                placeholder="year"
                onChange={yearChange}
              />
              <Button className="operator" label={'+'} onClick={increaseYear} />
              <br />
              <Button label={'Add to Bookhself'} onClick={addingBook} />
              <StarRating />
              <Button label={'Currently reading'} onClick={addingCurrent} />
              <Button label={'Want to read'} onClick={addingCurrent} />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
