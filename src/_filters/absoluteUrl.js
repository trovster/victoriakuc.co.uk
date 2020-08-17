const { URL } = require('url')

module.exports = (url, base) => {
  try {
    return new URL(url, base).toString()
  } catch (e) {
    return url
  }
}
