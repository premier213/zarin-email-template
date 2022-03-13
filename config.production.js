/*
|-------------------------------------------------------------------------------
| Production config           https://maizzle.com/docs/environments/#production
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
  baseImageURL: "http://ftp1.meysamsaberi.ir/",
  build: {
    templates: {
      destination: {
        path: "build_production",
      },
    },
  },
  inlineCSS: true,
  removeUnusedCSS: true,
};
