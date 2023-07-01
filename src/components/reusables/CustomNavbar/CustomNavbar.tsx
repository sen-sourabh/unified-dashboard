import React, { ReactNode } from 'react';

interface NavbarProps {
  children: ReactNode;
}

const CustomNavbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

interface NavItemProps {
  label: string;
  onClick: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ label, onClick }) => {
  return <li onClick={onClick}>{label}</li>;
};

export default CustomNavbar;
