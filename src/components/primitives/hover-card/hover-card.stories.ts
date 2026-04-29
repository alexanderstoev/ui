import type { Meta, StoryObj } from "@storybook/react-vite";

import { HoverCard } from "@/components/primitives/hover-card/hover-card";

const meta = {
  title: "Primitives/Hover card",
  component: HoverCard,
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: "Hi there!",
  },
};
