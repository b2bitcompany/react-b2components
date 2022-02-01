import styled, { keyframes, css } from 'styled-components';

import { MdClose } from 'react-icons/md';

interface IToastStyle {
  backgroundColor: string;
}

const toast = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

// @keyframes toast-right {
//   from {
//     transform: translateX(-100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// }

export const Container = styled.div`
  position: fixed;
  z-index: 2147483648;
  bottom: 10px;
  left: 10px;
`;

export const Toast = styled.div<IToastStyle>`
  background-color: ${(props) => props.backgroundColor};
  color: #f1f1f1;
  min-width: 300px;
  display: flex;
  align-items: center;
  left: 10px;
  bottom: 10px;
  border-radius: 2px;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  animation: ${() =>
    css`
      ${toast} 1s
    `};
  padding: 15px;
  margin-bottom: 10px;
`;

export const ToastText = styled.span`
  margin-right: 20px;
`;

export const CloseIcon = styled(MdClose)`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;
