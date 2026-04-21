import type { Meta, StoryObj } from "@storybook/react-vite";

import { Alert } from "@/components/primitives/alert/alert";

const meta = {
  title: "Primitives/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: "Hi there!",
  },
};
