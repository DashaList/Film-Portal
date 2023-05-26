import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import SliderIndicators, { SliderIndicatorsProps } from './SliderIndicators';
import { useArgs } from '@storybook/client-api';

const meta: Meta<SliderIndicatorsProps> = {
  title: 'Slider Indicators',
  component: SliderIndicators,
};

export default meta;

const slidesLength = 7;

// eslint-disable-next-line react-hooks/rules-of-hooks
const [{currentIndex}, updateArgs] = useArgs();

const goToPrev = () => {
    const newIndex = currentIndex == 0 ? slidesLength - 1 : currentIndex - 1
    updateArgs({activeIndicator: newIndex})
}

export const Default: StoryObj<SliderIndicatorsProps> = {
  args: {
    indicatorsNumber: slidesLength,
    activeIndicator: currentIndex,
    goToPrev: goToPrev,
  },
};
