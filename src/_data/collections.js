module.exports = {
  art: (collection) => {
    return collection.getFilteredByGlob(['./src/art/**/content.md']).sort((a, b) => {
      const aNumber = parseInt(a.data.page.inputPath.replace(/\.\/src\/[^\/]+\/([0-9]*)\_?-?[^\/]+\/content\.md/, '$1'), 10)
      const bNumber = parseInt(b.data.page.inputPath.replace(/\.\/src\/[^\/]+\/([0-9]*)\_?-?[^\/]+\/content\.md/, '$1'), 10)

      if (aNumber < bNumber) {
        return -1
      }

      if (aNumber > bNumber) {
        return 1
      }

      return 0
    })
  },
  sculptures: (collection) => {
    return collection.getFilteredByGlob(['./src/sculptures/**/content.md']).sort((a, b) => {
      const aNumber = parseInt(a.data.page.inputPath.replace(/\.\/src\/[^\/]+\/([0-9]*)\_?-?[^\/]+\/content\.md/, '$1'), 10)
      const bNumber = parseInt(b.data.page.inputPath.replace(/\.\/src\/[^\/]+\/([0-9]*)\_?-?[^\/]+\/content\.md/, '$1'), 10)

      if (aNumber < bNumber) {
        return -1
      }

      if (aNumber > bNumber) {
        return 1
      }

      return 0
    })
  }
}
