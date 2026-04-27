import type { Meta, StoryObj } from "@storybook/react-vite";

import { DecisionBlock } from "@/components/blocks/decision-block/decision-block";

import { MOCK_DECISIONS } from "@/testing/mocks/decisions";

const meta = { title: "Blocks/Decision", component: DecisionBlock } satisfies Meta<
  typeof DecisionBlock
>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { decision: MOCK_DECISIONS[0] } };
