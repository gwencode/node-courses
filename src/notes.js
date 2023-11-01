import { insertDB, saveDB, getDB } from "./db";

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    id: Date.now(),
    content: note,
  }
  await insertDB(newNote);
  return newNote;
}
