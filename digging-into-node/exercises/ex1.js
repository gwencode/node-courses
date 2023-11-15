#!/usr/bin/env node

"use strict";

const util = require("util")
const path = require("path")
const fs = require("fs");
const getStdin = require("get-stdin")

const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in"],
  string: ["file"]
})

// console.log(args)

if (args.help) {
  printHelp();
} else if (args.in) {
  getStdin().then(processFile).catch(error);
} else if (args.file) {
  fs.readFile(path.resolve(args.file), (err, contents) => {
    if (err) {
      error(err.toString());
    } else {
      processFile(contents.toString())
    }
  })
} else {
  error("Incorrect usage.", true);
}

// ********************

// Synchronous fs.readFile
function processFile(filepath) {
  // const contents = fs.readFileSync(filepath);
  // console.log(contents); // -> print the buffer
  // const contents = fs.readFileSync(filepath);
  // process.stdout.write(contents); // -> print the string
  const contents = fs.readFileSync(filepath, "utf8");
  console.log(contents); // -> print the string
}

// Asynchronous fs.readFile, second argument = callback
function processFile(contents) {
    contents = contents.toUpperCase();
    process.stdout.write(contents);
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

  // // process.stdout.write("Hello World");
  // // process.stdout.write("Hello World\n");

  // console.log("Hello world");

  // console.error("Oops");
