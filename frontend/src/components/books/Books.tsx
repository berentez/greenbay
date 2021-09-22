import { useEffect } from 'react';
import useFetch from '../../hooks/fetch';
import { BookData, RequestOptions } from '../../interfaces';
import Info from '../info';

import Recommendation from '../recommendation';
import Searchbar from '../searchbar';

interface BooksProps {
  authorization: string;
  recommendation: BookData;
  setBookRecommendation: Function;
}

const requestOptions: RequestOptions = {
  method: 'GET',
};

const Books: React.FC<BooksProps> = ({
  authorization,
  setBookRecommendation,
}) => {
  let { data } = useFetch<BookData>(authorization, '/books', requestOptions);

  useEffect(() => {
    function mapBooks() {
      data as BookData;
      if (data?.books.length) {
        let { books } = data;
        setBookRecommendation(books);
      }
    }
    mapBooks();
  }, [data, setBookRecommendation]);

  return (
    <div>
      <Searchbar />
      <Info />
      <Recommendation />
    </div>
  );
};

export default Books;
