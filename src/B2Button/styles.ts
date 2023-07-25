import styled, { css } from 'styled-components';

export type VariantType = 'primary' | 'secondary' | 'outline' | 'transparent';

export interface IButton {
  variant: VariantType;
}

export const Button = styled.button<IButton>`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 2rem;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity 0.25s ease-out, transform 0.1s ease-in-out;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }

  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.colors.main};
      color: ${theme.colors.buttonText.primary};
    `}

  ${({ theme, variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.buttonText.secondary};
    `};

  ${({ theme, variant }) =>
    variant === 'outline' &&
    css`
      color: ${theme.colors.main};
      border: ${`2px solid ${theme.colors.main}`};
      background-color: transparent;
    `}

    ${({ theme, variant }) =>
      variant === 'transparent' &&
      css`
        background-color: transparent;
        color: ${theme.colors.main};
      `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      border: 2px solid transparent;
      color: ${theme.colors.gray.five};
      background-color: ${theme.colors.gray.one};
      &:hover {
        transform: scale(1);
        cursor: not-allowed;
      }
    `};
`;
