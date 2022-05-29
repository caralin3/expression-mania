import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GuessForm } from './GuessForm';

export default {
  title: 'Application/Component Library/Guess Form',
  component: GuessForm,
  argTypes: {
    onChangeText: { action: 'changed' },
    onSubmit: { action: 'submit' },
    text: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof GuessForm>;

const Template: ComponentStory<typeof GuessForm> = (args) => (
  <GuessForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: '',
};
