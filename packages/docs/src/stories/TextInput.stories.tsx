import { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@idealizesoft-ui/react";

const meta: Meta<TextInputProps> = {
  title: "Form/Text Input",
  component: TextInput,

  args: {},
};

export default meta;
type Story = StoryObj<TextInputProps>;
export const Primary: Story = {
  args: {
    label: "Name",
    placeholder: "type your name",
  },
};
export const WithoutLabel: Story = {
  args: {
    placeholder: "type your name",
  },
};
export const Disabled: Story = {
  args: {
    label: "Name",
    disabled: true,
  },
};
export const WithPrefix: Story = {
  args: {
    label: "Name",
    prefix: "idealizesoft.com/",
  },
};
