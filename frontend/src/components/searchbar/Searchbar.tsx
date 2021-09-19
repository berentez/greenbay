import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { BookInterface } from '../../interfaces';
import Input from '../common/input';

import './searchbar.scss';
import Search from '../../assets/icons/search.svg';

interface SearchbarProps {}

const Searchbar: React.FC<SearchbarProps> = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState('');

  const searchbarChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const listInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setList(event.target.value);
  };

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    let result: BookInterface;
  };

  return (
    <div className="searchbar">
      <img className="search" src={Search} alt="search" />
      <Input
        value={search}
        type="text"
        placeholder="Search for a book in our library!"
        onChange={searchbarChange}
      />
      <Input
        value={list}
        type="list"
        placeholder="Search by"
        onChange={listInputChange}
        list="search-by"
      />
      <datalist id="search-by">
        <option value="author" />
        <option value="title" />
      </datalist>
    </div>
  );
};

export default Searchbar;
