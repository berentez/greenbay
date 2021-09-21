import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Input from '../common/input';

import './searchbar.scss';
import Search from '../../assets/icons/search.svg';
import Button from '../common/button/Button';
import Message from '../common/alert-message';

import { BookInterface, SearchError, SearchRequest } from '../../interfaces';
import { searchService } from '../../services/search-service';

interface SearchbarProps {
  authorization: string;
  setSearchedBook: Function;
}

const Searchbar: React.FC<SearchbarProps> = ({
  authorization,
  setSearchedBook,
}) => {
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const searchbarChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    let request: SearchRequest = { search: '' };

    if (search.length === 0) {
      setMessage(`Write something to the searchbar.`);
      setMessageType('info');
      return;
    } else {
      setMessageType('');

      request.search = search;
    }

    const result: Promise<BookInterface | SearchError> = searchService(
      authorization,
      request
    );
    console.log(result);
    setSearchedBook(result);
  };

  return (
    <div className="searchbar">
      <form className="search-book" onSubmit={handleOnSubmit}>
        <img className="search" src={Search} alt="search" />
        <Input
          value={search}
          type="text"
          placeholder="Search for a book in our library!"
          onChange={searchbarChange}
        />

        <Button label="search" />
        <Message type={messageType} text={message} />
      </form>
    </div>
  );
};

export default Searchbar;
