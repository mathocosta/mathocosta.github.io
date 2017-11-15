/**
 * Here reads all .json files in the './posts' directory
 * and transforms them into html pages.
 * And put all posts in /blog page.
 */

const fs = require('fs')
const path = require('path')
const marked = require('marked')
const hbs = require('handlebars')
const saveFile = require('./save-file.js')

// Compiling the templates.
const postTemplate = hbs.compile(fs.readFileSync('./src/hbs/post.hbs', 'utf8'))
const blogPageTemplate = hbs.compile(fs.readFileSync('./src/hbs/blog.hbs', 'utf8'))

const inputDir = './src/posts'
const outPostsDir = './posts/'

fs.readdir(inputDir, (err, files) => {
  let posts = []

  files.forEach((file) => {
    if (path.extname(file) == '.json') {
      let post = JSON.parse(fs.readFileSync(path.join(inputDir, file), 'utf8'))
      posts.push(post)

      let markdownContent = fs.readFileSync(`${path.join(inputDir, post.filename)}.md`, 'utf8')
      marked(markdownContent, (err, out) => post.content = out)

      let html = postTemplate(post)
      let outFile = `${path.join(outPostsDir, post.filename)}.html`
      saveFile(outFile, html, `\t> ${post.filename}.html saved...`)
    }
  })

  saveFile('blog.html', blogPageTemplate({ posts: posts }), `\t> blog.html saved...`)
})
