import React from 'react';
import { Wrapper } from './buttonStyles';

const Button = ({ text, callback }) => (
  <Wrapper type='button' onClick={callback}>
    {text}
  </Wrapper>
);

export default Button;
