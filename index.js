#!/usr/bin/env node

import { count } from './utils.js'; // start with dot to indicate that it's a relative path
import whatever from './utils.js';
import fs from 'fs'; // fs is a built-in module // no specify path because it's a built-in module

// Equivalent with CommonJS : require
// const { count } = require('./utils.js');
// const whatever = require('./utils.js');
// const fs = require('fs');

console.log(count(1));
console.log(whatever);

const note = process.argv[2];
const newNote = {
  content: note,
  id: Date.now()
}

console.log(newNote);
