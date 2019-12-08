# React Parcel SSR [STABLE VERSION]

> React Server Side Rendering with Parcel and Babel.

Simple example of how to do server-rendering. You will not believe how easy it is!

## Using

- parcel-bundler
- react
- react-router-dom
- react-helmet (SEO)
- react-imported-component (Code Splitting)

## Handy Extras

- gzip compression
- eslint
- [favicon example](server/index.js#16)
- [Code split example](src/App.jsx#12)

## Structure

```
.
├── server
│   ├── generateHtml.js
│   ├── matchRoute.js
│   ├── middleWare.js
│   └── index.js
├── src
│   ├── api
│   │   └── ...
│   ├── assets
│   |   ├── img
│   │   |   └── ...
│   |   ├── style
│   │   |   └── ...
│   │   └── ...
│   ├── components
│   │   └── ...
│   ├── containers
│   │   └── ...
│   ├── lib
│   |   ├── cache.js
│   │   └── ...
│   ├── store
│   │   ├── actions
│   │   │   └── ...
│   │   ├── reducers
│   │   │   └── ...
│   │   ├── types
│   │   │   └── ...
│   │   └── configureStore.js
│   ├── App.jsx
│   ├── client.js
│   ├── imported.js
│   ├── index.html
│   └── routes.js
├── .env
├── .babelrc
├── .eslintrc
├── .gitignore
├── README.md
├── config.js
├── package.json
└── yarn.lock
```

## Develop in pure front end mode with hot reload ([http://localhost:1234](http://localhost:1234))

```
yarn dev
```

## Develop in SSR mode without hot reload ([http://localhost:8080](http://localhost:8080))

```
yarn ssr
```

## Build & Serve ([http://localhost:8080](http://localhost:8080))

```
yarn build
yarn serve
```

## Environment needs to be adjust accordingly

```
NODE_ENV=staging
REACT_APP_ENV=staging
PORT=8080
```

### Issue during development

- Incase you changed an existing folder name or file name make sure to RUN command `yarn clear`
- Hot modules is only available in `yarn dev`, you need to re-run the project manually with `yarn ssr`
- Client side is not able to consumed _.env_ variables

### How does it work?

To do proper server-rendering, the code is bundled in two version: one for the browser and one for Node.js.

The browser version is in the `dist/client` folder and the Node.js version is in `dist/server`. However, they both share the same public path for their files: `/dist` and it points to the browser version. Go read the code, it's pretty straightforward!

### Read the code!

1. [package.json](package.json) - Start by reading the `scripts` section to understand how the build process works. Yes it's that dead simple!
1. [src/index.html](src/index.html) - Your only HTML file acting as a template
1. [src/client.js](src/client.js) - Entry point for your browser version
1. [src/App.jsx](src/App.jsx) - Your main application component shared between your browser and Node.js version
1. [src/routes.jsx](src/routes.jsx) - Where you specify the list of routing point (NOTE: SEO must be import directly, imported components are for client side)
1. [src/helloWorld](src/helloWorld) - Dead simple hello world with SEO consumed
1. [src/helloWorld2](src/helloWorld2) - A fun code split example (WARNING: SEO is not possible with code splitting)
1. [src/assets/style/global.scss](src/assets/style/global.scss) - Example of global SCSS
1. [server/index.js](server/index.js) - Entry point for your Node.js version
1. [server/middleware.js](server/middleware.js) - Middleware taking care of server-rendering
1. [server/matchRoute.js](server/matchRoute.js) - Identifying if current route should be rendered
1. [server/generateHtml.js](server/generateHtml.js) - Generate the HTML using `index.html` as the template with cheerio
