import type { Meta, StoryObj } from "@storybook/react-vite";

import { SubjectSummary } from "@/components/blocks/subject-summary/subject-summary";

const meta = { title: "Blocks/SubjectSummary", component: SubjectSummary } satisfies Meta<
  typeof SubjectSummary
>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Dashboard: Story = {};
