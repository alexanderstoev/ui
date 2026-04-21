import type { Meta, StoryObj } from "@storybook/react-vite";

import { DashboardPage } from "@/components/pages/dashboard/dashboard";

import { MOCK_SUBJECTS } from "@/testing/mocks/subjects";

const meta = { title: "Pages/Dashboard", component: DashboardPage } satisfies Meta<
  typeof DashboardPage
>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Dashboard: Story = { args: { subjects: MOCK_SUBJECTS } };
