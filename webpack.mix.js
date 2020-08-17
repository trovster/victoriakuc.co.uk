const mix = require('laravel-mix')
const webpackConfig = require('./webpack.config')

mix.webpackConfig(webpackConfig)

mix.setPublicPath('dist')

mix.sass('src/scss/site.scss', 'css/site.css')
  .options({
    processCssUrls: false
  })

mix.js('src/js/site.js', 'js').extract([])
