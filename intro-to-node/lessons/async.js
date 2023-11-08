// Callbacks

fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

// In the example above, the readFile function reads the contents of file.txt.
// When the file is read, the callback function is executed.
// If an error occurs during the operation,
// the error is passed to the callback function as the first argument.

// Promises

import fs from 'fs/promises'

fs.readFile('file.txt')
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })

  // In the example above, the readFile function returns a promise.
  // When the promise is resolved, the then function is executed.
  // If the promise is rejected, the catch function is executed.

  // Async/await

  // import fs from 'fs/promises'

  const read = async () => {
    try {
      const data = await fs.readFile('file.txt')
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  read()
