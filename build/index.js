const {
  Sparky,
  FuseBox,
  RawPlugin,
  HTMLPlugin,
  SassPlugin
} = require('fuse-box');
const config = require('./config');

const vendorModules = [
  'aurelia-pal-browser',
  'aurelia-pal',
  'fuse-box-aurelia-loader',
  'aurelia-bootstrapper',
  'aurelia-framework',
  'aurelia-logging-console',
  'aurelia-templating-binding',
  'aurelia-history-browser',
  'aurelia-templating-resources',
  'aurelia-templating-router',
];

Sparky.task('dev', () => {
  const fuse = FuseBox.init({
    homeDir: config.paths.src,
    output: `${config.paths.dist}/$name.js`,
    plugins: [
      RawPlugin(['.css']),
      [SassPlugin(), RawPlugin(['.scss'])],
      HTMLPlugin({ useDefault: false })
    ]
  });

  fuse.bundle('vendor').instructions(`${ vendorModules.join(' + ') }`);
  fuse.bundle('app')
    .watch()
    .hmr()
    .sourceMaps(true)
    .instructions('!> [main.ts] + [**/*.{ts,html,css,scss}]');

  fuse.dev({
    root: config.paths.root
  });
  fuse.run();
});
