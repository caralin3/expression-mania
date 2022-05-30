import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Application/Component Library/Select',
  component: Select,
  argTypes: {
    placeholder: { control: 'text' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Choose a category',
  options: [
    {
      label: 'Movies',
      value: 'movies',
    },
    {
      label: 'Entertainment',
      value: 'entertainment',
    },
    {
      label: 'Science',
      value: 'science',
    },
  ],
};
