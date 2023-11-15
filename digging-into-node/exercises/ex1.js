#!/usr/bin/env node

"use strict";

const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"]
})

if (args.help) {
  printHelp();
} else if (args.file) {
  console.log(args.file);
} else {
  error("Incorrect usage.", true);
}

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

// ********************

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
