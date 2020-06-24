/** POLYFILLS  **/
import "core-js/stable";
import "regenerator-runtime/runtime";
import "whatwg-fetch";
/** /POLYFILLS **/

import React from "react";
import ReactDOM from "react-dom";

import WaykeComposite from "@wayke-se/components-react";

const settings = {
  provider: {
    graphQlUrl: "https://gql.wayketech.se/query",
    url: "https://test-ext-api.wayketech.se/vehicles",
    apiKey: "YOUR_API_KEY",
    ecomSettings: {
      url: "OPTIONAL_ECOM_URL",
    },
    googleMapsApiKey: "OPTIONAL_GOOGLE_MAPS_API_KEY",
  },
};

ReactDOM.render(
  <WaykeComposite {...settings} />,
  document.getElementById("react-components")
);
