#!/usr/bin/env node

"use strict";

printHelp();

// // process.stdout.write("Hello World");
// // process.stdout.write("Hello World\n");

// console.log("Hello world");

// console.error("Oops");

function printHelp() {
	console.log("ex1 usage:");
	console.log("");
	console.log("--help                      print this help");
	console.log("-, --in                     read file from stdin");
	console.log("--file={FILENAME}           read file from {FILENAME}");
	console.log("");
	console.log("");
}
