import type { Meta, StoryObj } from "@storybook/react-vite";

import { HomePage } from "@/components/pages/home/home";

const meta = { title: "Pages/Home", component: HomePage } satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Home: Story = {};
