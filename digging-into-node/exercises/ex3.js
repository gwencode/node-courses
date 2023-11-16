#!/usr/bin/env node

"use strict";

const util = require("util");
const path = require("path");
const fs = require("fs");
const Transform = require("stream").Transform;
const zlib = require("zlib");
// const getStdin = require("get-stdin")

const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in", "out", "compress", "uncompress"],
  string: ["file"]
})

console.log(args)

function streamComplete(stream) {
  return new Promise((res) => {
    stream.on("end", res);
  })
}

const BASE_PATH = path.resolve(
  process.env.BASE_PATH || __dirname
)

let OUTFILE = path.join(BASE_PATH, "out.txt")

if (args.help) {
  printHelp();
} else if (args.in | args._.includes("-")) {
  processFile(process.stdin)
} else if (args.file) {
  let stream = fs.createReadStream(path.join(BASE_PATH, args.file));
  processFile(stream)
  .then(() => console.log("Complete!"))
  .catch(error);
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
async function processFile(inStream) {
  let outStream = inStream;

if (args.uncompress) {
  let gunzipStream = zlib.createGunzip();
  outStream = outStream.pipe(gunzipStream);
}

  const upperStream = new Transform({
    transform(chunck, enc, cb) {
      this.push(chunck.toString().toUpperCase());
      cb();
      // setTimeout(cb, 500) -> Replace line above to see every chunck each 500ms
    }
  });
  outStream = outStream.pipe(upperStream);

  if (args.compress) {
    let gzipStream = zlib.createGzip()
    outStream = outStream.pipe(gzipStream);
    OUTFILE = `${OUTFILE}.gz`
  }

  let targetStream

  if (args.out) {
    targetStream = process.stdout
  } else {
    targetStream = fs.createWriteStream(OUTFILE);
  }


  outStream.pipe(targetStream)

  await streamComplete(outStream);
}

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

function printHelp() {
	console.log("ex3 usage:");
	console.log("  ex3.js --file={FILENAME}:");
	console.log("");
	console.log("--help                      print this help");
	console.log("--file={FILENAME}           read file from {FILENAME}");
	console.log("-, --in                     read file from stdin");
	console.log("--out                       print to stdout");
	console.log("--compress                  gzip the output");
	console.log("--uncompress                un-gzip the output");
	console.log("");
}
