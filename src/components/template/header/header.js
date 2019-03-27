import React from 'react';
import './header.scss';

import BreadcrumbsItem from '../headerBreadcrumbs'
import Logo from '../logo/logo'

const Header = (props) => {
  return (
    <header>
      <Logo />
      <BreadcrumbsItem />
    </header>
  )
}

export default Header;
