import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: '#FFFFFF';
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 20px;
`;
