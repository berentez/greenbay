import { FC, ChangeEventHandler } from 'react';
import './Input.css';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler;
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
