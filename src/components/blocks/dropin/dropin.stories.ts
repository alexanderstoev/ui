import type { Meta, StoryObj } from "@storybook/react-vite";

import { Dropin } from "@/components/blocks/dropin/dropin";

const meta = { title: "Blocks/Dropin", component: Dropin } satisfies Meta<typeof Dropin>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
