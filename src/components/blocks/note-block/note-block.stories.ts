import type { Meta, StoryObj } from "@storybook/react-vite";

import { NoteBlock } from "@/components/blocks/note-block/note-block";

import { MOCK_NOTES } from "@/testing/mocks/notes";

const meta = { title: "Blocks/Note", component: NoteBlock } satisfies Meta<typeof NoteBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { note: MOCK_NOTES[0] } };
