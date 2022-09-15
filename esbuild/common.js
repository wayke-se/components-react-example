require("dotenv").config();

module.exports = {
  bundle: true,
  sourcemap: true,
  loader: {
    '.js': 'jsx',
    '.woff': 'file',
    '.woff2': 'file',
    '.gif': 'file',
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
    '.eot': 'file',
    '.ttf': 'file',
  },
  define: {
    'process.env.WAYKE_SEARCH_URL': `"${process.env.WAYKE_SEARCH_URL}"`,
    'process.env.WAYKE_SEARCH_MLT_URL': `"${process.env.WAYKE_SEARCH_MLT_URL}"`,
    'process.env.WAYKE_SEARCH_X_API_KEY': `"${process.env.WAYKE_SEARCH_X_API_KEY}"`,
    'process.env.WAYKE_GRAPH_QL_URL': `"${process.env.WAYKE_GRAPH_QL_URL}"`,
    'process.env.WAYKE_ECOM_URL': `"${process.env.WAYKE_ECOM_URL}"`,
    'process.env.GOOGLE_MAPS_API_KEY': `"${process.env.GOOGLE_MAPS_API_KEY}"`,
  },
};
