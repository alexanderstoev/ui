import type { Meta, StoryObj } from "@storybook/react-vite";

import { TaskBlock } from "@/components/blocks/task-block/task-block";

import { MOCK_TASKS } from "@/testing/mocks/tasks";

const meta = { title: "Blocks/Task", component: TaskBlock } satisfies Meta<typeof TaskBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { task: MOCK_TASKS[0] } };
