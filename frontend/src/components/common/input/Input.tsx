import { FC, ChangeEventHandler } from 'react';
import './input.scss';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange?: ChangeEventHandler;
  list?: string;
}

const Input: FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
