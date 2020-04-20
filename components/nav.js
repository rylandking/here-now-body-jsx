import React from 'react';
import NavLogo from './NavLogo';
import SignUp from './SignUp';
import SocialLinks from './SocialLinks';

const Nav = () => (
  <nav className="flex h-16">
    <NavLogo />
    <SignUp />
    <SocialLinks />
  </nav>
);

export default Nav;
