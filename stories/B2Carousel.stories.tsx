import React, { useRef } from 'react';

import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Carousel, IB2Carousel } from '../src';

const meta: Meta = {
  title: 'B2carousel',
  component: B2Carousel,
  argTypes: {
    options: {
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
    },
    selected: {
      defaultValue: 0,
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

const Template: Story<IB2Carousel> = (args) => {
  const [_, setArgs] = useArgs();

  return (
    <B2Theme>
      <B2Carousel
        {...args}
        onSelect={(selected) => setArgs({ ...args, selected })}
      />
    </B2Theme>
  );
};

export const Default = Template.bind({});
