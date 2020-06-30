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
WAYKE_HOST=YOUR_HOST
WAYKE_SEARCH_URL=https://test-ext-api.wayketech.se/vehicles
WAYKE_SEARCH_X_API_KEY=OPTIONAL_YOUR_API_KEY
WAYKE_GRAPH_QL_URL=https://gql.wayketech.se/query
WAYKE_ECOM_URL=https://ecom.wayketech.se
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

`WAYKE_HOST` can be used instead of using and exposing the `WAYKE_SEARCH_X_API_KEY`. If, for example, your development host is `test.com.localhost`
Update your local host file and add:
127.0.0.1   test.com.localhost
This will change the origin, while still pointing to localhost.
Start the example and open `test.com.localhost:5000`.

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