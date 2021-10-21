import { BookInterface } from '../../interfaces';
import Title from '../common/title';
import Cover from '../cover';

import './recommendation.scss';

interface RecomProps {
  recommendation: Array<BookInterface>;
}

const Recommendation: React.FC<RecomProps> = ({ recommendation }) => {
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
      <ul className="booklist">
        {recommendation.map(value => (
          <li key={value.id}>
            <Cover book={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
