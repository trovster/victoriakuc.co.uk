module.exports = {
  art: (collection) => {
    return collection.getFilteredByGlob(['./src/_collections/art/*.md']).sort((a, b) => {
      const aNumber = a.data.order || parseInt(a.data.page.fileSlug, 10)
      const bNumber = b.data.order || parseInt(b.data.page.fileSlug, 10)

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
    return collection.getFilteredByGlob(['./src/_collections/sculptures/*.md']).sort((a, b) => {
      const aNumber = a.data.order || parseInt(a.data.page.fileSlug, 10)
      const bNumber = b.data.order || parseInt(b.data.page.fileSlug, 10)

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
