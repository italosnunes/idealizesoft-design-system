import { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@idealizesoft-ui/react";

const meta: Meta<TextProps> = {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore ducimus excepturi vero expedita! Asperiores quia praesentium ab temporibus modi eum nihil magnam beatae? Id iste nostrum quae neque quis.",
  },
};

export default meta;
type Story = StoryObj<TextProps>;
export const Primary: Story = {};
export const Strong: Story = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
