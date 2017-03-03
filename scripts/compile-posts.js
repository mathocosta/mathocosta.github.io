/**
 * Here reads all .json files in the './posts' directory
 * and transforms them into html pages.
 */

const hbs = require('handlebars')
const fs = require('fs')


/**
 * Create a new file with the data passed as argument.
 *
 * @param {string} name
 * @param {string} data
 */
function saveFile (name, data) {
  fs.writeFile(`${name}.html`, data, err => {
    if (err)
      throw err
    else
      console.log(`> ${name} saved...`)
  })
}


// Compiling the template.
const postTemplate = hbs.compile(fs.readFileSync('./src/hbs/post.hbs', 'utf8'))

fs.readdir('./posts/', (err, files) => {
  files.forEach((file) => {
    let post = JSON.parse(fs.readFileSync(`./posts/${file}`, 'utf8'))
    let html = postTemplate(post)
    saveFile(post.filename, html)
  })

  console.log('\nAll files successfully compiled!')
})
