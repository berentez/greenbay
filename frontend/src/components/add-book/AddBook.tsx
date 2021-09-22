import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { NewBook, NewBookResponse } from '../../interfaces';
import { addBookService } from '../../services/add-book-service';
import Message from '../common/alert-message';
import Button from '../common/button/Button';
import Input from '../common/input';
import Cover from '../cover/Cover';

import './add-book.scss';

interface AddBookProps {
  authorization: string;
}

const AddBook: React.FC<AddBookProps> = ({ authorization }) => {
  const initialBook: NewBook = {
    title: '',
    author: '',
    page: 0,
    color: 'grey',
    genre: '',
  };

  let history = useHistory();

  const [book, setBook] = useState(initialBook);
  const [title, setTitle] = useState(initialBook.title);
  const [author, setAuthor] = useState(initialBook.author);
  const [genre, setGenre] = useState(initialBook.genre);
  const [color, setColor] = useState(initialBook.color);
  const [page, setPage] = useState(initialBook.page);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const titleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const authorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const pageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(parseInt(event.target.value));
  };

  const genreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value);
  };

  const colorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (
      title.length === 0 ||
      author.length === 0 ||
      genre.length === 0 ||
      color === 'grey' ||
      page === 0
    ) {
      setMessage('Please fill out every field!');
      setMessageType('error');
      return;
    } else {
      let result: NewBookResponse = await addBookService(authorization, book);

      if (result.message && result.type) {
        setMessage(result.message);
        setMessage(result.type);
      } else {
        setTimeout(() => {
          history.push('/books');
        }, 2000);
      }
    }
  };

  useEffect(() => {
    function bookChange() {
      const newBook: NewBook = {
        title: title,
        author: author,
        page: page,
        color: color,
        genre: genre,
      };

      setBook(newBook);
    }

    bookChange();
  }, [title, author, genre, color, page]);

  return (
    <div className="wrapper">
      <div className="main">
        <Cover book={book} />

        <form className="add" onSubmit={handleOnSubmit}>
          <Input
            value={title}
            type="text"
            placeholder="Title"
            onChange={titleChange}
          />

          <Input
            value={author}
            type="text"
            placeholder="Author"
            onChange={authorChange}
          />

          <Input
            value={page.toString()}
            type="number"
            placeholder="Page"
            onChange={pageChange}
          />

          <select id="genre" value={genre} onChange={genreChange}>
            <option value="thriller">thriller</option>
            <option value="literary">literary</option>
            <option value="mystery">mystery</option>
            <option value="horror">horror</option>
            <option value="historical">historical</option>
            <option value="romance">romance</option>
            <option value="western">western</option>
            <option value="bildungsroman">bildungsroman</option>
            <option value="science-fiction">science-fiction</option>
            <option value="fantasy">fantasy</option>
            <option value="dystopian">dystopian</option>
            <option value="non-fiction">non-fiction</option>
          </select>

          <select id="color" value={color} onChange={colorChange}>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="orange">orange</option>
            <option value="purple">purple</option>
            <option value="pink">pink</option>
          </select>

          <Button label="Add book" />
        </form>
      </div>

      <Message type={messageType} text={message} />
    </div>
  );
};

export default AddBook;
