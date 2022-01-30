import styled from 'styled-components';

export default styled.input`
  border: 2px solid ${(props) => props.theme.colors.gray.six};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.gray.twelve};

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.main};
  }

  ::-webkit-calendar-picker-indicator {
    background-image: url('/images/calendar-alt-solid.svg');
    filter: invert(0.6);
  }
`;
