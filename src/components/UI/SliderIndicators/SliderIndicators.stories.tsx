import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import SliderIndicators, { SliderIndicatorsProps } from './SliderIndicators';
import { useArgs } from '@storybook/client-api';

const meta: Meta<SliderIndicatorsProps> = {
  title: 'Slider Indicators',
  component: SliderIndicators,
  decorators: [
    (story, context) => {
      const [args, updateArgs] = useArgs()

      const slidesLength = 7;

      const goToPrev = () => {
        const currentIndex = args.activeIndicator
        const newIndex = currentIndex == 0 ? slidesLength - 1 : currentIndex - 1
        updateArgs({activeIndicator: newIndex})
      }

      return story({ ...context, updateArgs })
    },
    (Story) => (
      <div>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<SliderIndicatorsProps>;



// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [{currentIndex}, updateArgs] = useArgs();



// const Story = () => {
  
// }

export const Default: Story = {
  render: () => <SliderIndicators goToPrev={function (): void {
    throw new Error("Function not implemented.");
  } } goToNext={function (): void {
    throw new Error("Function not implemented.");
  } } indicatorsNumber={0} activeIndicator={0} />
};
