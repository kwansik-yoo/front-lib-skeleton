import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SimpleCalculator} from "../comp";

export default {
  title: 'View/SimpleCalcuator',
  component: SimpleCalculator,
} as ComponentMeta<typeof SimpleCalculator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleCalculator> = (args) => <SimpleCalculator {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  x: 10,
  y: 5
};