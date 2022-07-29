import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled, { css } from 'styled-components';

interface IArrow {
  disabled: boolean;
}

export const SliderContainer = styled.div`
  color: ${(props) => props.theme.colors.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

export const SliderImage = styled.img`
  border-radius: ${(props) => props.theme.borderRadius};
`;

const arrowStyle = css<IArrow>`
  width: 50px;
  height: 50px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)<IArrow>`
  ${arrowStyle}
`;

export const ArrowRight = styled(MdKeyboardArrowRight)<IArrow>`
  ${arrowStyle}
`;
