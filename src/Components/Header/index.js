import React from 'react';
import { Link } from 'react-router-dom';

// import Logo from '../../images/';
// import TMDBLogo from '../../images/';

import { Wrapper, Content, Logo, TMDBLogo } from './headerStyles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <Logo src='' alt='Logo' />
      </Link>
      <TMDBLogo src='' alt='TMDBLogo' />
    </Content>
  </Wrapper>
);

export default Header;
