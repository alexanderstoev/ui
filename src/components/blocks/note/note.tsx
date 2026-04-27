import type { Note } from "@/types";

export type NoteProps = {
  note: Note;
};
export const NoteBlock = ({ note }: NoteProps) => {
  return <div>{note.content}</div>;
};
