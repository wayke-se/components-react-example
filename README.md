# Introduction

This is an example application that shows how to add the `@wayke-se/components-react` component to a non-react application.

Some things to note:

* Adding the entire React framework will be heavy and affect the loading time of the non-react website
* Make sure to configure the webpack build step according to your own requirements, so that the final build is production ready (i.e. we don't take responsibility of that)
* In this example the project is bundled with Webpack, however you can use other bundler like Rollup or Parcel
* `theme.css` is not referenced inside `index.html` because it's imported inside index.(js/ts) and bundled up with the javascript. 

## Prerequisites

* nodejs + npm

Create a .env file in root
```
WAYKE_SEARCH_URL=https://test-ext-api.wayketech.se/vehicles
WAYKE_SEARCH_X_API_KEY=YOUR_API_KEY
WAYKE_GRAPH_QL_URL=https://gql.wayketech.se/query
WAYKE_ECOM_URL=https://ecom.wayketech.se
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

## Build

* In the root dir, run `npm install`
* Then run `npm run build-js` to build the javascript example or type `npm run build-ts` to build the typescript example

The result is in the `build` folder.


## Usage
Start serving the files from the `build` folder on localhost:5000
```bash
npm start
```

## Development
For development purpose one can use `npm run start:js` or `npm run start:ts`.
This will start the build process in watch mode with HRM (Hot Module Replacement)


## Resources

Consider the following repository for more information:

* https://github.com/wayke-se/components-react