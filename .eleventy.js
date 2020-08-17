const collections = require('./src/_data/collections.js')
const absoluteUrl = require('./src/_filters/absoluteUrl')
const byKey = require('./src/_filters/byKey')
const bySlug = require('./src/_filters/bySlug')
const folder = require('./src/_filters/folder')
const image = require('./src/_filters/image')

module.exports = function (config) {
  config.setTemplateFormats([ 'md', 'njk', 'jpg' ]);
  config.addPassthroughCopy({
    'src/assets/img': 'img/',
    'src/assets/apple-touch-icon.png': 'apple-touch-icon.png',
    'src/assets/apple-touch-icon-precomposed.png': 'apple-touch-icon-precomposed.png',
    'src/assets/favicon.ico': 'favicon.ico',
    'src/assets/icon.png': 'icon.png',
    'src/assets/browserconfig.xml': 'browserconfig.xml',
    'src/assets/site.webmanifest': 'site.webmanifest'
  })

  Object.keys(collections).forEach((collectionName) => {
    config.addCollection(collectionName, collections[collectionName])
  })

  config.addFilter('absoluteUrl', (href, base) => absoluteUrl(href, base))

  config.addFilter('folder', (page) => folder(page))
  config.addFilter('image', (page) => image(page, config))

  config.addFilter('byKey', (collection, key) => byKey(collection, key))

  config.addFilter('bySlug', (collection, slug) => bySlug(collection, slug))

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts'
    },
    passthroughFileCopy: true
  }
}
