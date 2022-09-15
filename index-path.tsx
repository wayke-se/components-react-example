import React from "react";
import ReactDOM from "react-dom";

import "./theme.css";
import "./ecom.css"; // Optional Ecom CSS for custom styling

import WaykeComposite, {
  WaykePubSub,
  WaykeCompositeWithProviderProps,
} from "@wayke-se/components-react";

WaykePubSub.subscribe({ eventName: "All", callback: console.log });

const settings: WaykeCompositeWithProviderProps = {
  composite: {
    placeholderImage:
      "https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg",
    pathRoute: "/id/",
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

ReactDOM.render(
  <WaykeComposite {...settings} />,
  document.getElementById("react-components")
);
