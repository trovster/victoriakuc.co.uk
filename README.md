# victoriakuc.co.uk

Static site built using [Eleventy](https://www.11ty.dev).

---

## Development

To start development, you can run the following;

```npm start```

This will setup watching for compiling SASS and JavaScript and serve Eleventy.

---

## Admin

[Netlify CMS](https://www.netlifycms.org) can be used to manage the content.

To use the the CMS locally, you must start a proxy server by running the following;

```npx netlify-cms-proxy-server```

---

## Testing

To run the tests, you run;

```npm test```

---

## Deploying

A GitHub action updates the `gh-pages` branch with the latest build when a commit is made to the `main` branch.

The site is also deployed on [Netlify](https://www.netlify.com) when a commit is main to the `main` branch.
