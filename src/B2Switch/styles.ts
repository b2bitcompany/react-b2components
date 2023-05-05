import styled from 'styled-components';

interface CheckBoxProps {
  disabled: boolean;
}

export const CheckBoxWrapper = styled.div<CheckBoxProps>`
  display: inline-block;
  position: relative;
  &,
  input,
  label {
    cursor: ${({ disabled }) => disabled && 'not-allowed'};
  }
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 3px;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.error};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.success};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
