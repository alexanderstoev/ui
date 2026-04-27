import type { Meta, StoryObj } from "@storybook/react-vite";

import { RiskBlock } from "@/components/blocks/risk-block/risk-block";

import { MOCK_RISKS } from "@/testing/mocks/risks";

const meta = { title: "Blocks/Risk", component: RiskBlock } satisfies Meta<typeof RiskBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { risk: MOCK_RISKS[0] } };
