import { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@idealizesoft-ui/react";

const meta: Meta<AvatarProps> = {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/italosnunes.png",
    alt: "Italo Nunes",
  },
};

export default meta;
type Story = StoryObj<AvatarProps>;
export const Primary: Story = {};
export const WithFallback: Story = {
  args: {
    src: undefined,
  },
};
