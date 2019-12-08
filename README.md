# parcel-react-ssr [ORIGINAL FORK]

Simple example of how to do server-rendering. You will not believe how easy it is!

Using:

* parcel-bundler
* react
* react-router-dom
* react-helmet (SEO)
* react-imported-component (Code Splitting)

Handy Extras

* gzip compression
* eslint
* [favicon example](server/index.js#16)
* [Code split example](app/App.jsx#12)

## How to run

* `npm run dev` - Run the development server with hot reload but no server-rendering
* `npm run build` - Build for production, required before running
* `npm start` - Start the production server

## How does it work?

To do proper server-rendering, the code is bundled in two version: one for the browser and one for Node.js.

The browser version is in the `dist/client` folder and the Node.js version is in `dist/server`. However, they both share the same public path for their files: `/dist` and it points to the browser version. Go read the code, it's pretty straightforward!

## Read the code!

1. [package.json](package.json) - Start by reading the `scripts` section to understand how the build process works. Yes it's that dead simple!
1. [app/index.html](app/index.html) - Your only HTML file acting as a template
1. [app/client.js](app/client.js) - Entry point for your browser version
1. [app/App.jsx](app/App.jsx) - Your main application component shared between your browser and Node.js version
1. [app/HelloWorld.jsx](app/HelloWorld.jsx) - Dead simple hello world
1. [app/HelloWorld2.jsx](app/HelloWorld2.jsx) - A fun code split example
1. [app/HelloWorld.scss](app/HelloWorld.scss) - Example of SCSS
1. [server/index.js](server/index.js) - Entry point for your Node.js version
1. [server/middleware.js](server/middleware.js) - Middleware taking care of server-rendering
1. [server/generateHtml.js](server/generateHtml.js) - Generate the HTML using `index.html` as the template with cheerio
