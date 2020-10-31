module.exports = function (config) {
  config.addPassthroughCopy({ './src/_includes/style.css': 'style.css' })

  return {
    dir: {
      input: './src',
      output: './build'
    }
  }
}
