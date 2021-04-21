import styled from 'styled-components';

export const TimeBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 7rem;
  margin-top: 0.25rem;
  background-color: ${({ theme }) => theme.primaryHover};
  opacity: 0.8;
  color: ${({ theme }) => theme.primaryLight};
  font-size: 0.75rem;
  font-weight: lighter;
  border-radius: 20px;
`;

export const Line = styled.div`
  display: flex;
  margin-left: 3.75rem;
  border-left: 2px solid ${({ theme }) => theme.primaryDark};
  height: 100%;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    margin-left: 0rem;
    transition: all 0.3s ease-in-out;
  }
`;
