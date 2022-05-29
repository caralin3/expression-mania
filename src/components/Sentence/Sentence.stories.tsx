import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sentence } from './Sentence';

export default {
  title: 'Application/Component Library/Sentence',
  component: Sentence,
  argTypes: {
    sentence: { control: 'text' },
  },
} as ComponentMeta<typeof Sentence>;

const Template: ComponentStory<typeof Sentence> = (args) => (
  <Sentence {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sentence: 'The quick brown fox jumped over the lazy dog',
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  sentence: 'The ..... brown fox jumped .... the lazy dog',
};
