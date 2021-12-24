import styled, { keyframes, css } from 'styled-components';

import b2bit from './image.png';

interface IB2Spinner {
  image?: string;
  animation?: string;
}

const pour = keyframes`
  0%{ transform: rotate(3deg); }
  100% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
`;

export const B2Spinner = styled.div<IB2Spinner>`
  background: ${(props) =>
    props.image ? `url(${props.image})` : `url(${b2bit})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${(props) =>
    props.animation
      ? props.animation
      : css`
          ${pour} 0.75s ease-in-out infinite
        `};
`;
