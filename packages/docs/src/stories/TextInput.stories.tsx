import { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@idealizesoft-ui/react";

const meta: Meta<TextInputProps> = {
  title: "Form/Text Input",
  component: TextInput,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<TextInputProps>;
export const Primary: Story = {
  args: {
    placeholder: "type your name",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
export const WithPrefix: Story = {
  args: {
    prefix: "idealizesoft.com/",
  },
};
