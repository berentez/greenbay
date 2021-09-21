import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Input from '../common/input';

import './searchbar.scss';
import Search from '../../assets/icons/search.svg';
import Radio from '../common/radio';
import Button from '../common/button/Button';
import Message from '../common/alert-message';

interface SearchbarProps {}

const Searchbar: React.FC<SearchbarProps> = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('title');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const searchbarChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleTitle = () => {
    setCategory('title');
  };

  const handleAuthor = () => {
    setCategory('author');
  };

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (search.length === 0) {
      setMessage(`Write something to searchbar.`);
      setMessageType('info');
      return;
    } else {
      if (category === 'title') {
        let bookSearch = {
          title: search,
        };
      } else {
        let bookSearch = {
          author: search,
        };
      }
      ///////////////////////////////////
    }
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
        {/* <span className="ending"></span> */}

        <Button label="search" />
        <Message type={messageType} text={message} />
      </form>
    </div>
  );
};

export default Searchbar;
