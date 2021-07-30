import React from 'react';
import { Link } from 'react-router-dom';

// import AppLogo from '../../images/video-camera.png';
import AppLogo from '../../images/movie-projector.png';
import TMDBImg from '../../images/tmdb-logo.svg';

import { Wrapper, Content, Logo, TMDBLogo } from './headerStyles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <Logo src={AppLogo} alt='Logo' />
      </Link>
      <a href='https://www.themoviedb.org/'>
        <TMDBLogo src={TMDBImg} alt='TMDBLogo' />
      </a>
    </Content>
  </Wrapper>
);

export default Header;
