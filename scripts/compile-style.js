const sass = require('node-sass')
const saveFile = require('./save-file.js')


sass.render({
  file: './src/sass/main.sass',
  includePaths: ['./src/sass'],
  outputStyle: 'compressed'
}, (sassError, result) => {
  if (sassError)
    throw sassError

  saveFile('./public/style.css', result.css, '> Styles compiled.')
})

module.exports = sass