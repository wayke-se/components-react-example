const common = require('./common.js');

module.exports = Object.assign(common, {
  assetNames: '[name]-[hash]',
  entryNames: '[name]-[hash]',
  splitting: true,
  format: 'esm',
  define: Object.assign(common.define, {
    'process.env.NODE_ENV': '"development"',
    'process.env.SSR': 'false',
    'process.env.MEDIA_SERVICE_URI': '"https://test-api.wayketech.se"',
    'process.env.CMS_SERVICE_URI': '"https://test-api.wayketech.se/cms"',
    'process.env.DOCUMENT_SERVICE_URI': '"https://test-api.wayketech.se"',
    'process.env.SHARED_DECLARATION': '"156411/w8ztj5"',
  }),
});
