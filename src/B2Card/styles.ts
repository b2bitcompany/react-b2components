import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: #ffffff;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 20px;
`;
