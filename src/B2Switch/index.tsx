import React, { useMemo } from 'react';

import { nanoid } from 'nanoid';

import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './styles';

export interface IB2Switch {
  isChecked: boolean;
  onChange: () => void;
}

export const B2Switch: React.FC<IB2Switch> = ({ isChecked, onChange }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <CheckBoxWrapper>
      <CheckBox
        id={id}
        type="checkbox"
        checked={isChecked}
        onClick={onChange}
      />
      <CheckBoxLabel htmlFor={id} />
    </CheckBoxWrapper>
  );
};
