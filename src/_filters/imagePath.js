const folder = require('./folder')

module.exports = (image, page) => {
  return folder(page || '') + '/' + (image || 'image.jpg')
}
