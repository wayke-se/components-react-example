/** POLYFILLS  **/
import "core-js/stable";
import "regenerator-runtime/runtime";
import "whatwg-fetch";
/** /POLYFILLS **/

import React from "react";
import ReactDOM from "react-dom";

import "./theme.css";

import WaykeComposite, { WaykePubSub } from "@wayke-se/components-react";

WaykePubSub.subscribe({ eventName: "All", callback: console.log });

const settings = {
  provider: {
    graphQlUrl: process.env.WAYKE_GRAPH_QL_URL,
    url: process.env.WAYKE_SEARCH_URL,
    apiKey: process.env.WAYKE_SEARCH_X_API_KEY,
    ecomSettings: {
      url: process.env.WAYKE_ECOM_URL,
    },
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  },
};

ReactDOM.render(
  <WaykeComposite {...settings} />,
  document.getElementById("react-components")
);
