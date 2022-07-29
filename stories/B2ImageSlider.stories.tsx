import React from 'react';

import { Meta, Story } from '@storybook/react';

import { B2Theme, B2ImageSlider, IB2ImageSlider } from '../src';

const meta: Meta = {
  title: 'B2ImageSlider',
  component: B2ImageSlider,
  argTypes: {
    images: {
      defaultValue: [
        {
          alt: 'image 1',
          url: 'https://b2bit.company/wp-content/uploads/2020/09/PERFIL-5.png',
        },
        {
          alt: 'image 2',
          url: 'https://avatars.githubusercontent.com/u/22632046?s=200&v=4',
        },
      ],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IB2ImageSlider> = (args) => (
  <B2Theme>
    <B2ImageSlider {...args} />
  </B2Theme>
);

export const Default = Template.bind({});
