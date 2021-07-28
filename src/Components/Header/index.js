import React from 'react';

// import Logo from '../../images/';
// import TMDBLogo from '../../images/';

import { Wrapper, Content, Logo, TMDBLogo } from './headerStyles';

const Header = () => (
  <Wrapper>
    <Content>
      <Logo src='' alt='Logo' />
      <TMDBLogo src='' alt='TMDBLogo' />
    </Content>
  </Wrapper>
);

export default Header;
