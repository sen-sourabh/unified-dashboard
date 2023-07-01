import React, { TextareaHTMLAttributes } from 'react';
import './CustomTextarea.css';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const CustomTextarea: React.FC<TextareaProps> = ({ ...rest }) => {
  return <textarea {...rest} className='custom-textarea-input'/>;
};

export default CustomTextarea;
