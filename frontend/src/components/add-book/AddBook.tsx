import { useState } from 'react';
import { BookInterface } from '../../interfaces';
import Cover from '../cover/Cover';

interface AddBookProps {}

const AddBook: React.FC<AddBookProps> = () => {
  const initialBook: BookInterface = {
    id: 0,
    title: '',
    author: '',
    page: 0,
    color: 'grey',
    genre: '',
  };

  const [book, setBook] = useState(initialBook);

  return (
    <div className="wrapper">
      <Cover book={book} />
    </div>
  );
};

export default AddBook;
