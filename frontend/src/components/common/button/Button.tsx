import { FC, MouseEventHandler } from 'react';
import './button.scss';

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler;
}

const Btn: FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Btn;
