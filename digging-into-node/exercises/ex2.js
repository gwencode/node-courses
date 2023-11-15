#!/usr/bin/env node

"use strict";

const util = require("util")
const path = require("path")
const fs = require("fs");
// const getStdin = require("get-stdin")

const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in"],
  string: ["file"]
})

// console.log(args)

const BASE_PATH = path.resolve(
  process.env.BASE_PATH || __dirname
)

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
  const outStream = inStream;

  const targetStream = process.stdout
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
	console.log("-, --in                     read file from stdin");
	console.log("--file={FILENAME}           read file from {FILENAME}");
	console.log("");
	console.log("");
}
