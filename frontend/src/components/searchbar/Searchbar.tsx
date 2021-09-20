import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { BookInterface } from '../../interfaces';
import Input from '../common/input';

import './searchbar.scss';
import Search from '../../assets/icons/search.svg';
import Radio from '../common/radio';
import Button from '../common/button/Button';

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
      <div className="radio-search">
        <Radio value="Author" name="search" />
        <Radio value="Title" name="search" />
      </div>
      <span className="ending"></span>

      <Button label="search" />
    </div>
  );
};

export default Searchbar;
