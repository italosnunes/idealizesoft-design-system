import { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@idealizesoft-ui/react";

const meta: Meta<HeadingProps> = {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: "Custom title",
  },
};

export default meta;
type Story = StoryObj<HeadingProps>;
export const Primary: Story = {};
export const H1: Story = {
  args: {
    children: "h1 Heading",
    as: "h1",
  },
};
