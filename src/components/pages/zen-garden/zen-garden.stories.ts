import type { Meta, StoryObj } from "@storybook/react-vite";

import { ZenGardenPage } from "@/components/pages/zen-garden/zen-garden";

import { MOCK_DROPINS } from "@/testing/mocks/dropins";

const meta = { title: "Pages/Zen Garden", component: ZenGardenPage } satisfies Meta<
  typeof ZenGardenPage
>;

export default meta;
type Story = StoryObj<typeof meta>;
export const ZenGarden: Story = { args: { dropins: MOCK_DROPINS } };
