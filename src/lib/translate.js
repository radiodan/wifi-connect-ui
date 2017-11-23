import escape from 'lodash/escape';
import mapValues from 'lodash/mapValues';
import template from 'lodash/template';

const makeTemplateFunction = tmpl =>
  template(escape(tmpl), { interpolate: /\$\{([\s\S]+?)\}/g });

export default config => {
  const templateFunctions = mapValues(config.text, makeTemplateFunction);

  return (key, data) => templateFunctions[key](data);
};
