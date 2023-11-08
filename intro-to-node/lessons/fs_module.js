import fs from 'node:fs/promises';

// Read file

const readPjson = async () => {
  const pjsonPath = new URL('../package.json', import.meta.url).pathname;
  console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')));
}

// readPjson();

// Write file

const writeFile = async () => {
  const newFile = new URL('../demo.js', import.meta.url).pathname;
  await fs.writeFile(newFile, 'console.log("yooooo!")');
}

writeFile();
