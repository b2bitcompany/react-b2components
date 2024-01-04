import styled from 'styled-components';
import { B2Button } from '../B2Button';
import { color } from 'b2utils';

export const Button = styled(B2Button)`
  color: ${props => props.theme.colors.gray.six};
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  padding: 0px;

  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;

  &:disabled {
    background-color: ${props =>
      color.addOpacityOnHexColor(props.theme.colors.main, 0.6)};
    color: ${props => props.theme.colors.main};
  }
`;
