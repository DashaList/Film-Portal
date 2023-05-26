import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Input',
  component: Input,
};

export default meta;

export const Default: StoryObj<InputProps> = {
  args: {
    type: 'text',
    placeholder: 'Введите...'
  },
};

export const Password: StoryObj<InputProps> = {
  args: {
    type: 'password',
    placeholder: 'Введите пароль'
  },
};