import React, { useMemo } from 'react';

import { nanoid } from 'nanoid';

import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './styles';

export interface IB2Switch {
  isChecked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

export const B2Switch: React.FC<IB2Switch> = ({
  isChecked,
  disabled = false,
  onChange,
}) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <CheckBoxWrapper disabled={disabled}>
      <CheckBox
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        disabled={disabled}
      />
      <CheckBoxLabel htmlFor={id} />
    </CheckBoxWrapper>
  );
};
