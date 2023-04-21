import { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@idealizesoft-ui/react";
import { ArrowRight } from "phosphor-react";

const meta: Meta<ButtonProps> = {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Send",
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;
export const Primary: Story = {};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Create new",
  },
};
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "md",
    children: "Cancel",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
};
