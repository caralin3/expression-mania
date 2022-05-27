import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Application/Component Library/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Start Game',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Start Game',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Start Game',
  size: 'lg',
};
