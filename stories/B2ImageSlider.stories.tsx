import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { B2Theme, B2ImageSlider, IB2ImageSlider } from '../src';

const meta: Meta<typeof B2ImageSlider> = {
  title: 'B2ImageSlider',
  component: B2ImageSlider,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof B2ImageSlider>;

export const Default: Story = {
  render: (args) => (
    <B2Theme>
      <B2ImageSlider {...args} />
    </B2Theme>
  ),
  args: {
    images: [
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
};
