const config = require('./common');

require('esbuild').serve(
  {
    servedir: 'wwwesm',
    port: 5000,
  },
  Object.assign(config, {
    entryPoints: ['index.tsx'],
    outdir: 'wwwesm',
  })
);
