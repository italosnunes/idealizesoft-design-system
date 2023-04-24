import { StoryObj, Meta } from "@storybook/react";
import { TextInput, TextInputProps } from "@idealizesoft-ui/react";

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
export const PrimaryWithLargeMargin: Story = {
  args: {
    label: "Name",
    placeholder: "type your name",
    marginContainer: "lg",
  },
};
export const Small: Story = {
  args: {
    label: "Name",
    placeholder: "type your name",
    sizeContainer: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Name",
    placeholder: "type your name",
    sizeContainer: "lg",
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
    placeholder: "type your name",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "type your password",
    mask: "password",
  },
};
