import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderBar from './HeaderBar';

const Header = () => (
  <nav className="flex h-16">
    <HeaderLogo />
    <HeaderBar />
  </nav>
);

export default Header;
