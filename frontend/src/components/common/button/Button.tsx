import { FC, MouseEventHandler } from 'react';
import './button.scss';

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler;
  className?: string;
}

const Btn: FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Btn;
