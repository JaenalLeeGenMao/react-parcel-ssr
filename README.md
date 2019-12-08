# React Parcel SSR [BUGGY during production mode]

> React Server Side Rendering with Parcel and Babel.

- [x] CSS Modules (`postcss-modules` & `babel-plugin-css-modules-transform`)
- [x] Universal cookie (`react-cookie` & `universal-cookie-express`)
- [x] `react-router`
- [x] `isomorphic-fetch`
- [x] `react-redux` (`redux-thunk`)

## Structure

```
.
├── server
│   ├── middlewares
│   │   ├── matchRoute.js
│   │   ├── ssr.js
│   │   └── tmpl.js
│   └── app.js
├── src
│   ├── components
│   │   └── ...
│   ├── containers
│   │   └── ...
│   ├── store
│   │   ├── actions
│   │   │   └── ...
│   │   ├── reducers
│   │   │   └── ...
│   │   ├── configureStore.js
│   │   └── types.js
│   ├── styles
│   │   └── ...
│   ├── utils
│   │   └── ...
│   ├── App.js
│   ├── client.js
│   ├── index.html
│   ├── index.ssr.html
│   └── routes.js
├── README.md
├── config.js
├── package.json
└── yarn.lock
```

## Develop in pure front end mode ([http://localhost:1234](http://localhost:1234))

```
yarn dev
```

## Develop in SSR mode ([http://localhost:8080](http://localhost:8080))

```
yarn ssr
```

## Build & Serve ([http://localhost:8080](http://localhost:8080))

```
yarn build
yarn serve
```

Inspired by [https://www.npmjs.com/package/react-cookie](https://www.npmjs.com/package/react-cookie)

## ENV Setup

```
cd ~/server/app.js
on line 9
const ENV = process.env.REACT_APP_ENV || process.env.NODE_ENV || "staging";
```

## Config Setup

Config is a function that accept a single param ENV

```
cd ~/config.js
const config = initConfig(ENV || "production");
```
