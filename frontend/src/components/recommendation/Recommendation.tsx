import { useEffect } from 'react';
import { BookInterface } from '../../interfaces';
import Title from '../common/title';

interface RecomProps {
  recommendation: Array<BookInterface>;
}

const Recommendation: React.FC<RecomProps> = ({ recommendation }) => {
  const initialBooksData: any[] = [
    { author: '', title: '', genre: '', page: 0, color: '' },
  ];

  recommendation as BookInterface[];

  // useEffect(() => {
  //   function mapBooks() {
  //     recommendation as BookInterface[];
  //     recommendation.map((book: any) => {
  //       console.log(book);
  //       setBooksData(book);
  //     });
  //   }
  //   mapBooks();
  // });

  return (
    <div>
      <Title text="Recommendation" />
      <ul>
        {recommendation.map(value => (
          // console.log(value);
          <li key={value.id}>{value.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
