import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GuessForm } from './GuessForm';

export default {
  title: 'Application/Component Library/Form',
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

export const GuessingForm = Template.bind({});
GuessingForm.args = {
  text: '',
};
