import fs from 'node:fs/promises';

const DB_PATH = new URL('../db.json', import.meta.url).pathname;

// Write database

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, 'utf-8');
  console.log(JSON.parse(db));
  return JSON.parse(db);
}

// Save database

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
}

// Add note

export const insertDB = async (note) => {
  const db = await getDB();
  db.notes.push(note);
  await saveDB(db);
  return note;
};
