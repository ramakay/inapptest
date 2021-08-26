const withModernizr = require("next-plugin-modernizr");
// module.exports = withModernizr();

// module.exports = {
//     withModernizr({
//     webpack(config, options) {
//       config.experiments = {
//         topLevelAwait: true,
//       };
//       return config;
//     }
//     })
//   };

module.exports = withModernizr({
    webpack(config, options) {
        config.experiments = {
                     topLevelAwait: true,
                 };
      return config;
    }
  });