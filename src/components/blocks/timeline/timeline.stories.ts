import type { Meta, StoryObj } from "@storybook/react-vite";

import { Timeline } from "@/components/blocks/timeline/timeline";

import { MOCK_TIMELINE } from "@/testing/mocks/timeline";

const meta = { title: "Blocks/Timeline", component: Timeline } satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { entries: MOCK_TIMELINE } };
export const Empty: Story = { args: { entries: [] } };
