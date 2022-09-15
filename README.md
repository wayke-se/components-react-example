# Introduction

> This is an example application that shows how to add the [@wayke-se/components-react](https://github.com/wayke-se/components-react) component to a non-react application.

**Some things to note:**

* Adding the entire React framework will be heavy and affect the loading time of the non-react website
* Make sure to configure the webpack build step according to your own requirements, so that the final build is production ready (i.e. we don't take responsibility of that)
* In this example the project is bundled with Webpack, however you can use other bundler like Rollup or Parcel
* `theme.css` is not referenced inside `index.html` because it's imported inside index.(js/ts) and bundled up with the javascript. 

## Prerequisites

* nodejs
* npm

Create an `.env` file in root and add the following information:
```
WAYKE_HOST=YOUR_HOST_1,YOUR_HOST_2
WAYKE_SEARCH_URL=https://test-ext-api.wayketech.se/vehicles
WAYKE_GRAPH_QL_URL=https://gql.wayketech.se/query
WAYKE_ECOM_URL=https://ecom.wayketech.se
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

If, for example, your development host is `test.com.localhost`.
Update your local host file and add:
127.0.0.1   test.com.localhost
This will change the origin, while still pointing to localhost.
Start the example and open `test.com.localhost:5000`.

To add more hosts, add all to your local host file and then update `WAYKE_HOST` (comma separated):
```
WAYKE_HOST=a.com.localhost,b.com.localhost
```
`a.com.localhost:5000` and `b.com.localhost:5000` can now be accessed.


## Build

* In the root dir, run `npm install`
* Then run `npm run build:js` to build the javascript example or type `npm run build:ts` to build the typescript example

The result is in the `build` folder.


## Usage
Start serving the files from the `build` folder on localhost:5000
```bash
npm start
```

## Development
For development purpose one can use one of the following samples below.
This will start the build process in watch mode with HRM (Hot Module Replacement)

1. Webpack example showing the `WaykeComponent` with hash routing (default route option), javascript.
```bash
npm run start:js
```

2. Webpack example showing the `WaykeComponent` with hash routing (default route option), typescript.
```bash
npm run start:ts
```

1. Esbuild example showing the `WaykeComponent` with hash routing (default route option), javascript.
```bash
npm run start:esbuild
```

2. Esbuild example showing the `WaykeComponent` with hash routing (default route option), typescript.
```bash
npm run start:esbuild-esm
```

3. Webpack example showing the `WaykeComponent` with path routing, javascript.
```bash
npm run start-path:js
```

4. Webpack example showing the `WaykeComponent` with path routing, typescript.
```bash
npm run start-path:ts
```


## Resources

Consider the following repository for more information:

* https://github.com/wayke-se/components-react