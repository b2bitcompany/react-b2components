import React from 'react';

import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2ImagePicker, IB2ImagePicker } from '../src';

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

const Template: Story<IB2ImagePicker> = (args) => {
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
};

export const Default = Template.bind({});
