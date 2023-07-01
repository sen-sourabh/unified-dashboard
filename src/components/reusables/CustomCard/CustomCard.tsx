import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const CustomCard: React.FC<CardProps> = ({ title, children, onClick, className }) => {
  return (
    <div className={`card ${className}`} onClick={onClick} style={{border: '1px solid lightgray', borderRadius: '10px'}}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default CustomCard;
