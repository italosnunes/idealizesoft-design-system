import { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@idealizesoft-ui/react";

const meta: Meta<TextAreaProps> = {
  title: "Form/Text Area",
  component: TextArea,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<TextAreaProps>;
export const Primary: Story = {
  args: {
    placeholder: "add any observation",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
