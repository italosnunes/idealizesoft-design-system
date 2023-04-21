import { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@idealizesoft-ui/react";

const meta: Meta<BoxProps> = {
  title: "Surfaces/Box",
  component: Box,

  args: {
    children: <Text>Elemento Box</Text>,
  },
};

export default meta;
type Story = StoryObj<BoxProps>;
export const Primary: Story = {};
