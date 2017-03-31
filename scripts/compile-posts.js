/**
 * Here reads all .json files in the './posts' directory
 * and transforms them into html pages.
 * And put all posts in /blog page.
 */

const hbs = require('handlebars')
const fs = require('fs')
const saveFile = require('./save-file.js')

// Compiling the templates.
const postTemplate = hbs.compile(fs.readFileSync('./src/hbs/post.hbs', 'utf8'))
const blogPageTemplate = hbs.compile(fs.readFileSync('./src/hbs/blog.hbs', 'utf8'))

fs.readdir('./posts/', (err, files) => {
  let posts = []
  files.forEach((file) => {
    let post = JSON.parse(fs.readFileSync(`./posts/${file}`, 'utf8'))
    let html = postTemplate(post)
    saveFile(`${post.filename}.html`, html, `\t> ${post.filename}.html saved...`)

    let obj = {
      title: post.title,
      filename: post.filename,
      date: post.date
    }
    posts.push(obj)
  })

  blogPage = {
    posts: posts
  }
  let htmlBlog = blogPageTemplate(blogPage)
  saveFile('blog.html', htmlBlog, `\t> blog.html saved...`)
})
