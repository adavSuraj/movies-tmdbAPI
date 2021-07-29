import React from 'react';
import { Wrapper, Content } from './gridstyles';

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1> {header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;
