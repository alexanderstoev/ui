import type { Meta, StoryObj } from "@storybook/react-vite";

import { QuestionBlock } from "@/components/blocks/question-block/question-block";

import { MOCK_QUESTIONS } from "@/testing/mocks/questions";

const meta = { title: "Blocks/Question", component: QuestionBlock } satisfies Meta<
  typeof QuestionBlock
>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { question: MOCK_QUESTIONS[0] } };
