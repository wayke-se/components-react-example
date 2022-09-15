const common = require('./common.js');

module.exports = Object.assign(common, {
  assetNames: '[name]-[hash]',
  entryNames: '[name]-[hash]',
  splitting: true,
  format: 'esm',
  minify: true,
  define: Object.assign(common.define, {
    'process.env.NODE_ENV': '"production"',
    'process.env.SSR': 'false',
    'process.env.MEDIA_SERVICE_URI': '"https://api.wayke.se"',
    'process.env.CMS_SERVICE_URI': '"https://cms.wayke.se"',
    'process.env.DOCUMENT_SERVICE_URI': '"https://api.wayke.se"',
    'process.env.SHARED_DECLARATION': '"156411/w8ztj5"',
  }),
});
