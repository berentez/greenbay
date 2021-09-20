import { MouseEventHandler } from 'react';
import './radio.scss';

interface RadioProps {
  value: string;
  onClick: MouseEventHandler;
}

const Radio: React.FC<RadioProps> = ({ value, onClick }) => {
  return (
    <button className="radio" onClick={onClick}>
      {value}
    </button>
  );
};

export default Radio;
