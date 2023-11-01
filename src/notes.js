import { insertDB, saveDB, getDB } from "./db.js";

// Create a new note

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    id: Date.now(),
    content: note,
  }
  await insertDB(newNote);
  return newNote;
};

// Get all notes

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};

// Find notes by text

export const findNotes = async (filter) => {
  const { notes } = await getDB();
  return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()));
};

// Delete note by id

export const removeNote = async (id) => {
  const { notes } = await getDB();
  const match = notes.find(note => note.id === id);
  console.log("match 1", match)

  if (match) {
    const newNotes = notes.filter(note => note.id !== id);
    await saveDB({ notes: newNotes });
    console.log("match 2", match)
    return match;
  }
};

// Remove all notes

export const removeAllNotes = () => saveDB({ notes: [] });
