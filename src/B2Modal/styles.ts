import styled from 'styled-components';

interface IB2ModalContainer {
  isOpen: boolean;
}

export const Container = styled.div<IB2ModalContainer>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2147483647;
  background-color: #aaaaaa7b;
  animation: fade-in 0.25s ease-out;
  overflow: auto;
`;

export const Modal = styled.div`
  background-color: '#FFFFFF';
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 20px;
  animation: fade-in 0.5s ease-out, show-upwards 0.5s ease-out;
`;
