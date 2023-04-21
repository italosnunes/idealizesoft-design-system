import { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@idealizesoft-ui/react";

const meta: Meta<TextAreaProps> = {
  title: "Form/Text Area",
  component: TextArea,

  args: {},
};

export default meta;
type Story = StoryObj<TextAreaProps>;
export const Primary: Story = {
  args: {
    label: "Observations",
    placeholder: "add any observation",
  },
};
export const WithoutLabel: Story = {
  args: {
    placeholder: "add any observation",
  },
};
export const Disabled: Story = {
  args: {
    label: "Observations",
    disabled: true,
  },
};
