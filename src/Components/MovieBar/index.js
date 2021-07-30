import React from 'react';
import { Wrapper, Content } from './movieBarStyles';

const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

const MovieBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className='column'>
        <p> Runtime: {calcTime(time)}</p>
      </div>
      <div className='column'>
        <p> Budget: {convertMoney(budget)}</p>
      </div>
      <div className='column'>
        <p> Revenue: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

export default MovieBar;
