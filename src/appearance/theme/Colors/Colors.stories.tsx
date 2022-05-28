import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Colors } from './Colors';

export default {
  title: 'Application/Theme/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />;

export const Default = Template.bind({});
