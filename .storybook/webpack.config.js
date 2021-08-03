const webpack = require('webpack')

module.exports = async ({ config }) => {
  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/;
  config.plugins.push(
    new webpack.DefinePlugin({
      'ASSETS_PATH': JSON.stringify('../../assets/'),
    }),
  )
  config.module.rules.push({
    test: /\.svg$/,
    use: [{
      loader: "@svgr/webpack",
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      }
    }, "url-loader"],
  });
  return config;
};