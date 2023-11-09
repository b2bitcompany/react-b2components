import styled, { keyframes } from 'styled-components';

import { MdClose } from 'react-icons/md';
import { B2Button } from '../B2Button';

interface IToastStyle {
  backgroundColor: string;
}

const translate = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 2147483648;
  bottom: 10px;
  left: 10px;
  margin-right: 10px;
`;

export const Toast = styled.div<IToastStyle>`
  background-color: ${props => props.backgroundColor};
  color: #f1f1f1;
  min-width: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  left: 10px;
  bottom: 10px;
  border-radius: 2px;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  animation: ${translate} 1s;
  padding: 15px;
  margin-bottom: 10px;
`;

export const ToastGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ToastText = styled.span``;

export const ButtonContainer = styled.div`
  padding-right: 1rem;
  border-right: 1px solid #fff;
`;

export const CustomButton = styled(B2Button)`
  color: #fff;
  border: 1px solid #fff;
  padding: 0.25rem 2rem;
  font-weight: 400;
`;

export const CloseIcon = styled(MdClose)`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
