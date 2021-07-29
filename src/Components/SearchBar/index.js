import React, { useState, useEffect, useRef } from 'react';
import searchIcon from '../../images/search-icon.svg';
import { Wrapper, Content } from './searchBarStyles';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder='Enter Movie Name'
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
