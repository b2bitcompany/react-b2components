import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2ImagePicker } from '../src';

const meta: Meta = {
  title: 'B2ImagePicker',
  component: B2ImagePicker,
  argTypes: {
    text: {
      defaultValue: 'Upload Image',
    },
    extensions: {
      defaultValue: ['image/jpg', 'image/jpeg', 'image/png'],
    },
    maxSize: {
      defaultValue: 5000000,
      description: 'Max size in megabytes',
    },
    imageAlt: {
      defaultValue: 'Image picker',
    },
    onInvalidExtension: {
      defaultValue: () => alert('Invalid Extension'),
    },
    onInvalidSize: {
      defaultValue: () => alert('Invalid Size'),
    },
    loadingComponent: {
      defaultValue: () => (
        <div
          style={{
            color: 'white',
          }}
        >
          Loading...
        </div>
      ),
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

type Story = StoryObj<typeof B2ImagePicker>;

export const Default: Story = {
  render: (args) => {
    const [_, setArgs] = useArgs();

    return (
      <B2Theme>
        <B2ImagePicker
          {...args}
          onChooseImage={async (image) => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setArgs({ ...args, imageUrl: URL.createObjectURL(image) });
          }}
        />
      </B2Theme>
    );
  },
  args: {
    text: 'Upload Image',
    extensions: ['image/jpg', 'image/jpeg', 'image/png'],
    maxSize: 5000000,
    imageAlt: 'Image picker',
    onInvalidExtension: () => alert('Invalid Extension'),
    onInvalidSize: () => alert('Invalid Size'),
    loadingComponent: () => (
      <div
        style={{
          color: 'white',
        }}
      >
        Loading...
      </div>
    ),
  },
};
