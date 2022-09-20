import React from "react";
import { createRoot } from "react-dom/client";

import "./theme.css";
import "@wayke-se/ecom-web/dist/index.css";

import WaykeComposite, { WaykePubSub } from "@wayke-se/components-react";

WaykePubSub.subscribe({ eventName: "All", callback: console.log });

const settings = {
  composite: {
    placeholderImage:
      "https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg",
    pathRoute: "id",
    modifyDocumentTitleItem: true,
    modifyDocumentTitleSearch: "Wayke - Components React Example",
  },
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
    googleMapsMarker: "https://www.wayke.se/images/map/marker.png",
    useQueryParamsFromUrl: true,
  },
};


const container = document.getElementById("react-components");
const root = createRoot(container);
root.render(<WaykeComposite {...settings} />);
