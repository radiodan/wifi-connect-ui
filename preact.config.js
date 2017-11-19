const webpack = require('webpack');
const path = require('path');

export default (config, env, helpers) => {
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  let babelConfig = rule.options;

  if (env.isProd) {
    config.output.path = path.resolve(__dirname, 'build', 'js');
    config.output.publicPath = '/js/';
  }

  // No chunks
  config.plugins = config.plugins.filter(
    p => !(p instanceof webpack.optimize.CommonsChunkPlugin)
  );

  config.module.loaders = config.module.loaders.filter(
    l => !/async-component-loader/.test(l.loader)
  );

  // Enables async/await
  // https://github.com/developit/preact-cli/issues/333
  babelConfig.plugins.push('transform-regenerator');
  babelConfig.plugins.push([
    'transform-runtime',
    {
      helpers: false,
      polyfill: false,
      regenerator: true,
    },
  ]);
  // babelConfig.env = { ...some settings... }
};
