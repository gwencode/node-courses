#!/usr/bin/env node

"use strict";

const util = require("util");
const path = require("path");
const fs = require("fs");
const Transform = require("stream").Transform
// const getStdin = require("get-stdin")

const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in", "out"],
  string: ["file"]
})

// console.log(args)

const BASE_PATH = path.resolve(
  process.env.BASE_PATH || __dirname
)

const OUTFILE = path.join(BASE_PATH, "out.txt")

if (args.help) {
  printHelp();
} else if (args.in | args._.includes("-")) {
  processFile(process.stdin)
} else if (args.file) {
  let stream = fs.createReadStream(path.join(BASE_PATH, args.file));
  processFile(stream);
} else {
  error("Incorrect usage.", true);
}

// ********************

// Synchronous fs.readFile
// function processFile(filepath) {
//   const contents = fs.readFileSync(filepath, "utf8");
//   console.log(contents);
// }

// Asynchronous fs.readFile, second argument = callback
function processFile(inStream) {
  let outStream = inStream;
  const upperStream = new Transform({
    transform(chunck, enc, cb) {
      this.push(chunck.toString().toUpperCase());
      cb();
      // setTimeout(cb, 500) -> Replace line above to see every chunck each 500ms
    }
  });
  outStream = outStream.pipe(upperStream)

  let targetStream

  if (args.out) {
    targetStream = process.stdout
  } else {
    targetStream = fs.createWriteStream(OUTFILE);
  }
  outStream.pipe(targetStream)
}

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

function printHelp() {
	console.log("ex1 usage:");
	console.log("  ex1 --file={FILENAME}:");
	console.log("");
	console.log("--help                      print this help");
	console.log("--file={FILENAME}           read file from {FILENAME}");
	console.log("-, --in                     read file from stdin");
	console.log("--out                       print to stdout");
	console.log("");
}
