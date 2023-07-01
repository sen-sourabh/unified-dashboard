import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        {title}
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Accordion;
