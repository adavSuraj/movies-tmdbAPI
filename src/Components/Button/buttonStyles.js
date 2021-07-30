import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 10%;
  min-width: 200px;
  height: 30px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontSmall);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
