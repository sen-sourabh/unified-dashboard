import React, { ButtonHTMLAttributes } from 'react';
import './CustomButton.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomPrimaryButton: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return <button {...rest} className={`custom-primary-btn ${className}`}>{children}</button>;
};

export const CustomLightButton: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return <button {...rest} className={`custom-light-btn ${className}`}>{children}</button>;
};

export const CustomDarkButton: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return <button {...rest} className={`custom-dark-btn ${className}`}>{children}</button>;
};

export const CustomWarningButton: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return <button {...rest} className={`custom-warning-btn ${className}`}>{children}</button>;
};

export const CustomSuccessButton: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return <button {...rest} className={`custom-success-btn ${className}`}>{children}</button>;
};

export const CustomDangerButton: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return <button {...rest} className={`custom-danger-btn ${className}`}>{children}</button>;
};
