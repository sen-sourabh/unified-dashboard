import React, { InputHTMLAttributes } from 'react';
import './CustomRadio.css';

type RadioProps = InputHTMLAttributes<HTMLInputElement>;

const CustomRadio: React.FC<RadioProps> = ({ ...rest }) => {
  return (
    <label className="custom-radio-label">
      <input type="radio" {...rest} className="custom-radio-input" />
      <div className="custom-radio">
        <div className="custom-radio-dot"></div>
      </div>
      <span className="custom-radio-text">{rest?.children}</span>
      {rest['aria-label'] ? rest['aria-label'] : 'Checkbox'}
    </label>
  );
};

export default CustomRadio;
