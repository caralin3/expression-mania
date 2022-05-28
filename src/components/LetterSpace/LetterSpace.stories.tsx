import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LetterSpace } from './LetterSpace';

export default {
  title: 'Application/Component Library/LetterSpace',
  component: LetterSpace,
  argTypes: {
    letter: { control: 'text' },
  },
} as ComponentMeta<typeof LetterSpace>;

const Template: ComponentStory<typeof LetterSpace> = (args) => (
  <LetterSpace {...args} />
);

export const Default = Template.bind({});
Default.args = {
  letter: 'A',
};
