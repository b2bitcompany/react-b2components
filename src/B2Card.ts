import styled from 'styled-components';

export interface IB2Card {
  backgroundColor?: string;
}

export default styled.div<IB2Card>`
  box-shadow: 0px 4px 16px 0px #00000040;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
`;
