import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Timer } from './Timer';

export default {
  title: 'Application/Component Library/Timer',
  component: Timer,
  argTypes: {
    duration: { control: 'number' },
  },
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {
  duration: 5,
};
