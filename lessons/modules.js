// import { count } from './utils/utils1.js'; // start with dot to indicate that it's a relative path
import *  as utils from './utils/index.js';
import fs from 'fs'; // fs is a built-in module // no specify path because it's a built-in module
import capitalize from 'capitalize';

// Equivalent with CommonJS : require
// const { count } = require('./utils.js');
// const whatever = require('./utils.js');
// const fs = require('fs');

console.log(utils.count(1));
console.log(utils.whatever);
utils.other();

console.log(capitalize("hello World"));
