import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {

  },
};
