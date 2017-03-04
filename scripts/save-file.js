const fs = require('fs')

/**
 * Create a new file with the data passed as argument,
 * at the end, it returns a message to console.
 *
 * @param {string} name
 * @param {string} data
 * @param {string} message
 */
function saveFile (name, data, message) {
  fs.writeFile(name, data, err => {
    if (err)
      throw err
    else
      console.log(message)
  })
}

module.exports = saveFile