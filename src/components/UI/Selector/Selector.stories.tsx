import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import Selector, { SelectorProps } from './Selector';

const meta: Meta<SelectorProps> = {
  title: 'Selector',
  component: Selector,
};

export default meta;

export const Default: StoryObj<SelectorProps> = {
  args: {

  },
};
