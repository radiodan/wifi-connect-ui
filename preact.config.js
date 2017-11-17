export default (config, env, helpers) => {
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  let babelConfig = rule.options;

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
