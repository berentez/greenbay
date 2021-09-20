import './radio.scss';

interface RadioProps {
  value: string;
  name?: string;
  checked?: boolean;
}

const Radio: React.FC<RadioProps> = ({ value, name, checked }) => {
  return <button className="radio">{value}</button>;
};

export default Radio;
