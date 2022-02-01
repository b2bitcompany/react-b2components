import styled, { css, keyframes } from 'styled-components';

import b2bit from './image.png';

const pour = keyframes`
  0%{ transform: rotate(3deg); }
  100% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
`;

export const Spinner = styled.div`
  background: ${() => `url(${b2bit})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${() =>
    css`
      ${pour} 0.75s ease-in-out infinite
    `};
`;
