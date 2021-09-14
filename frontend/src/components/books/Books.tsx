import { useEffect } from 'react';
import useFetch from '../../hooks/fetch';
import { BookData, BookInterface, RequestOptions } from '../../interfaces';

interface BooksProps {
  authorization: string;
  setBookRecommendation: Function;
}

const requestOptions: RequestOptions = {
  method: 'GET',
};

const Books: React.FC<BooksProps> = ({
  authorization,
  setBookRecommendation,
}) => {
  const { data } = useFetch<BookData>(authorization, '/books', requestOptions);

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

  return <p></p>;
};

export default Books;
