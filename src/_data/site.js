const site = {
  title: 'Victoria Kuc – Art & Sculpture',
  summary: 'Victoria Kuc is an artist who specialises in clay sculptures.',
  author: 'Victoria Kuc',
  url: 'https://www.victoriakuc.co.uk',
  baseUrl: '/',
  email: 'victoria.kuc@hotmail.com',
  telephone: '07706 234409',
  address: {
    street: '21 Little Tixall Lane',
    locality: 'Great Haywood',
    region: 'Staffordshire',
    postcode: 'ST18 0SE'
  }
}

module.exports = () => {
  if (process.env.ELEVENTY_BASE_URL) {
    site.baseUrl = process.env.ELEVENTY_BASE_URL
  }

  // https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
  if (process.env.URL) {
    site.baseUrl = process.env.URL
  }

  // https://vercel.com/docs/v2/build-step#system-environment-variables
  if (process.env.VERCEL_URL) {
    site.baseUrl = process.env.VERCEL_URL
  }

  // https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables
  if (process.env.GITHUB_URL) {
    site.baseUrl = process.env.GITHUB_URL
  }

  return site
}
