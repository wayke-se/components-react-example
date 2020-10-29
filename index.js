/** POLYFILLS  **/
import "core-js/stable";
import "regenerator-runtime/runtime";
import "whatwg-fetch";
/** /POLYFILLS **/

import React from "react";
import ReactDOM from "react-dom";

import "./theme.css";
import "./ecom.css"; // Optional Ecom CSS for custom styling

import WaykeComposite, { WaykePubSub } from "@wayke-se/components-react";

WaykePubSub.subscribe({ eventName: "All", callback: console.log });

const settings = {
  provider: {
    graphQlUrl: process.env.WAYKE_GRAPH_QL_URL,
    url: process.env.WAYKE_SEARCH_URL,
    urlMlt: process.env.WAYKE_SEARCH_MLT_URL,
    ecomSettings: {
      url: process.env.WAYKE_ECOM_URL,
      useBankId: true,
      serviceLogotypeUrl: "https://cdn.wayke.se/wui/images/ecom/wayke-logo.svg",
    },
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    googleMapsMarker: 'https://www.wayke.se/images/map/marker.png',
    useQueryParamsFromUrl: true,
  },
};

ReactDOM.render(
  <WaykeComposite {...settings} />,
  document.getElementById("react-components")
);
