// import React, { InputHTMLAttributes } from 'react';
// import './CustomCheckbox.css';

// type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

// const CustomCheckbox: React.FC<CheckboxProps> = ({ ...rest }) => {
//   return <input type="checkbox" {...rest} className='custom-checkbox-input'/>;
// };

// export default CustomCheckbox;

import React, { InputHTMLAttributes } from 'react';
import './CustomCheckbox.css';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const CustomCheckbox: React.FC<CheckboxProps> = ({ className, ...rest }) => {
  return (
    <label className={`custom-checkbox-label ${className}`}>
      <input type="checkbox" className="custom-checkbox-input" {...rest} />
      <span className="custom-checkbox">
        <span className="custom-checkbox-checkmark"></span>
      </span>
      <span className="custom-checkbox-text">{rest?.children}</span>
      {rest['aria-label'] ? rest['aria-label'] : 'Checkbox'}
    </label>
  );
};

export default CustomCheckbox;
