import styled, { keyframes, css } from 'styled-components';

interface IHeaderText {
  selected?: boolean;
}

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1 }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0 }
`;

const selectedCss = css`
  bottom: -4px;
  animation: ${() =>
    css`
      ${fadeIn} 0.5s ease-out, show-upwards 0.5s ease-out
    `};
`;

const unSelectedCss = css`
  opacity: 0;
  animation: ${() =>
    css`
      ${fadeOut} 0.5s ease-out, hide-downwards 0.5s ease-out
    `};
`;

export const Carousel = styled.div`
  display: flex;
  align-items: stretch;
  overflow-x: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  span:not(:first-child) {
    margin-left: 40px;
  }
`;

export const HeaderText = styled.span<IHeaderText>`
  color: ${(props) => (props.selected ? props.theme.colors.main : '#737373')};
  font-size: 16px;
  font-weight: '600';
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    background-color: '#737373';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -4px;
    left: 0px;
    ${(props) => (props.selected ? selectedCss : unSelectedCss)}
  }
`;
