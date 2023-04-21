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
          <Text size="sm">Accept terms of use</Text>
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
