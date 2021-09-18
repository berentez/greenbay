import { useEffect, useState } from 'react';
import useFetch from '../../hooks/fetch';
import { BookData, BookInterface, RequestOptions } from '../../interfaces';
import Recommendation from '../recommendation';

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
  recommendation,
  setBookRecommendation,
}) => {
  const { data } = useFetch<BookData>(authorization, '/books', requestOptions);

  // console.log(data);

  const initialBooksData: BookInterface[] = [
    { id: 0, author: '', title: '', genre: '', page: 0, color: '' },
  ];

  const [booksData, setBooksData] = useState([initialBooksData]);

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

  return <Recommendation />;
};

export default Books;
