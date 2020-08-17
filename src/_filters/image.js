const folder = require('./folder')

module.exports = (data, config) => {
  return folder(data.page) + '/' + (data.image || 'image.jpg')
}
