#!/usr/bin/env node

import { count } from './utils.js';
import whatever from './utils.js';

console.log(count(1));
console.log(whatever);

const note = process.argv[2];
const newNote = {
  content: note,
  id: Date.now()
}

console.log(newNote);
