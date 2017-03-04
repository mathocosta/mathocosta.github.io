/**
 * Here reads all .json files in the './posts' directory
 * and transforms them into html pages.
 */

const hbs = require('handlebars')
const fs = require('fs')
const saveFile = require('./save-file.js')


// Compiling the template.
const postTemplate = hbs.compile(fs.readFileSync('./src/hbs/post.hbs', 'utf8'))

fs.readdir('./posts/', (err, files) => {
  files.forEach((file) => {
    let post = JSON.parse(fs.readFileSync(`./posts/${file}`, 'utf8'))
    let html = postTemplate(post)
    saveFile(`${post.filename}.html`, html, `\t> ${post.filename}.html saved...`)
  })
})
