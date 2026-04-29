import type { Meta, StoryObj } from "@storybook/react-vite";

import { Popover } from "@/components/primitives/popover/popover";

const meta = {
  title: "Primitives/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: "Hi there!",
  },
};
