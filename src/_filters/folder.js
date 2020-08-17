module.exports = (page) => {
  return (page.filePathStem || '').replace(/content$/, '')
}
