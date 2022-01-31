import React, { useRef } from 'react';

import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, IB2Menu, B2Menu, B2MenuItem, B2Button } from '../src';

const meta: Meta = {
  title: 'B2Menu',
  component: B2Menu,
  argTypes: {
    isShowing: {
      defaultValue: false,
    },
    anchor: {
      control: {
        disable: true,
      },
    },
    className: {
      description: 'Used to customize the component with styled-components',
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IB2Menu> = (args) => {
  const button = useRef(null);
  const [_, setArgs] = useArgs();

  return (
    <B2Theme>
      <B2Button
        variant="primary"
        onClick={() => {
          console.log(args);
          setArgs({ ...args, isShowing: true });
        }}
        ref={button}
      >
        Open Menu
      </B2Button>
      <B2Menu
        {...args}
        onHide={() => setArgs({ ...args, isShowing: false })}
        anchor={button.current}
      >
        <B2MenuItem>Item 1</B2MenuItem>
      </B2Menu>
    </B2Theme>
  );
};

export const Default = Template.bind({});
