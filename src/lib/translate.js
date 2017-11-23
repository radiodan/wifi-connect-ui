import template from 'lodash/template';
import mapValues from 'lodash/mapValues';

const makeTemplateFunction = tmpl =>
  template(tmpl, { interpolate: /\$\{([\s\S]+?)\}/g });

export default config => {
  const templateFunctions = mapValues(config.text, makeTemplateFunction);

  return (key, data) => templateFunctions[key](data);
};
