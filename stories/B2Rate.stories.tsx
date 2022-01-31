import React from 'react';

import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Rate, IB2Rate } from '../src';

const meta: Meta = {
  title: 'B2Rate',
  component: B2Rate,
  argTypes: {
    value: {
      defaultValue: 2.5,
      control: {
        disable: true,
      },
    },
    starSize: {
      defaultValue: 50,
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

const Template1: Story<IB2Rate> = (args) => {
  return (
    <B2Theme>
      <B2Rate {...args} />
    </B2Theme>
  );
};

const Template2: Story<IB2Rate> = (args) => {
  const [_, setArgs] = useArgs();

  return (
    <B2Theme>
      <B2Rate
        {...args}
        setValue={(value) => {
          setArgs({ ...args, value });
        }}
      />
    </B2Theme>
  );
};

export const JustToShow = Template1.bind({});
export const WithClick = Template2.bind({});
