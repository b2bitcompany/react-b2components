import React, { useRef } from 'react';

import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Button, B2Modal, IB2Modal } from '../src';

const meta: Meta = {
  title: 'B2Modal',
  component: B2Modal,
  argTypes: {
    isOpen: {
      defaultValue: false,
    },
    className: {
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

const Template: Story<IB2Modal> = (args) => {
  const button = useRef(null);
  const [_, setArgs] = useArgs();

  return (
    <B2Theme>
      <B2Button
        variant="primary"
        onClick={() => {
          setArgs({ ...args, isOpen: true });
        }}
        ref={button}
      >
        Open Modal
      </B2Button>
      <B2Modal
        {...args}
        onBackdropClick={() => setArgs({ ...args, isOpen: false })}
      >
        <span>This is a modal</span>
      </B2Modal>
    </B2Theme>
  );
};

export const Default = Template.bind({});
