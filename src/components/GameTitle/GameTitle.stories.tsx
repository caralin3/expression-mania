import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GameTitle } from './GameTitle';

export default {
  title: 'Application/Component Library/Game Title',
  component: GameTitle,
  argTypes: {},
} as ComponentMeta<typeof GameTitle>;

const Template: ComponentStory<typeof GameTitle> = (args) => (
  <GameTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {};
