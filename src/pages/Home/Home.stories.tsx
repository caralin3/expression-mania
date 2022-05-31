import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Home } from './Home';

export default {
  title: 'Application/Pages/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => (
  <BrowserRouter>
    <Home {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
