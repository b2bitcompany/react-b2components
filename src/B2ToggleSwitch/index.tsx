import React from 'react';

import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './styles';

export interface IToggleSwitch {
  handleToggle: () => void;
  id: string;
  defaultChecked?: boolean;
}

export const ToggleSwitch: React.FC<IToggleSwitch> = ({
  handleToggle,
  id,
  defaultChecked,
}) => {
  return (
    <>
      <CheckBoxWrapper>
        <CheckBox
          id={id}
          type="checkbox"
          onClick={handleToggle}
          defaultChecked={defaultChecked}
        />
        <CheckBoxLabel htmlFor={id} />
      </CheckBoxWrapper>
    </>
  );
};
