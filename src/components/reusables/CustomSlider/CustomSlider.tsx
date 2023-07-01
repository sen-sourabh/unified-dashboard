import React, { InputHTMLAttributes } from 'react';
import './CustomSlider.css';

type SliderProps = InputHTMLAttributes<HTMLInputElement>;

const CustomSlider: React.FC<SliderProps> = ({ ...rest }) => {
  return <input type="range" {...rest} className='custom-slider' />;
};

export default CustomSlider;
