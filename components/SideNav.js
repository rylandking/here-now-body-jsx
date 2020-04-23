import React from 'react';
import NavLogo from './NavLogo';
import Categories from './Categories';

const SideNav = () => (
  <div className="w-1/4 lg:w-56 h-screen border hidden lg:block">
    <NavLogo />
    <Categories />
  </div>
);

export default SideNav;
