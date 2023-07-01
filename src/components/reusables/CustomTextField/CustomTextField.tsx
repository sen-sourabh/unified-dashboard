import React, { InputHTMLAttributes } from 'react';
import './CustomTextField.css';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

const CustomTextField: React.FC<TextFieldProps> = ({ ...rest }) => {
  return <input {...rest} className='custom-textfield-input'/>;
};

export default CustomTextField;
