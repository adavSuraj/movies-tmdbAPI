import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  background: var(--darkGrey);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  span {
    text-decoration: underline;
    font-size: var(--fontSmall);
    color: var(--lightGrey);
    padding-right: 10px;
    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
