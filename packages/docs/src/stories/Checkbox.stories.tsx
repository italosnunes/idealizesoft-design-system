import { StoryObj, Meta } from "@storybook/react";
import { Box, Text, Checkbox, CheckboxProps } from "@idealizesoft-ui/react";

const meta: Meta<CheckboxProps> = {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<CheckboxProps>;
export const Primary: Story = {
  args: {},
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const RightLabel: Story = {
  args: {
    labelLocation: "right",
    label: "Accept terms of contract",
  },
};

export const DownLabel: Story = {
  args: {
    labelLocation: "down",
    label: "Accept terms of contract",
  },
};
