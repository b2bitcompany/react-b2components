import React from 'react';

import { MdError, MdWarning, MdInfo, MdDone } from 'react-icons/md';
import {
  Container,
  Toast,
  CloseIcon,
  ButtonContainer,
  CustomButton,
  ToastGroup,
  ToastText,
} from './styles';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export interface IToast {
  id: string;
  type: ToastType;
  text: string;
}

export interface IB2Toast {
  list: IToast[];
  remove: (id: string) => void;
  button?: ButtonProps;
}

const icons = {
  info: MdInfo,
  error: MdError,
  warning: MdWarning,
  success: MdDone,
};

const backgroundColor = {
  info: '#2196F3',
  warning: '#FF9800',
  error: '#F44336',
  success: '#00A000',
};

export const B2Toast: React.FC<IB2Toast> = ({ list, remove, button }) => (
  <Container>
    {list.map(toast => {
      const Icon = icons[toast.type];

      return (
        <Toast key={toast.id} backgroundColor={backgroundColor[toast.type]}>
          <ToastGroup>
            <Icon size="20" />
            <ToastText>{toast.text}</ToastText>
          </ToastGroup>
          <ToastGroup>
            {button && (
              <ButtonContainer>
                <CustomButton variant="outline" {...button}>
                  {button.text}
                </CustomButton>
              </ButtonContainer>
            )}
            <CloseIcon onClick={() => remove(toast.id)} size="15" />
          </ToastGroup>
        </Toast>
      );
    })}
  </Container>
);

export default B2Toast;
