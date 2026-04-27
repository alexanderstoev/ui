import type { Meta, StoryObj } from "@storybook/react-vite";

import { SubjectPage } from "@/components/pages/subject/subject";

import { MOCK_SUBJECTS } from "@/testing/mocks/subjects";

const meta = { title: "Pages/Subject", component: SubjectPage } satisfies Meta<typeof SubjectPage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Subject: Story = { args: { subject: MOCK_SUBJECTS[0] } };
