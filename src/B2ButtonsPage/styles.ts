import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.main : props.theme.colors.white};
  color: ${(props) =>
    props.disabled ? props.theme.colors.white : props.theme.colors.black};
  width: 40px;
  height: 40px;
  margin: 30px 5px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray.seven};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
