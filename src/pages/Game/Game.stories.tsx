import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Game } from './Game';

export default {
  title: 'Application/Pages/Game',
  component: Game,
  argTypes: {},
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
  round: 1,
};
