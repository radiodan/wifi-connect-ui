import escape from 'lodash/escape';
import mapValues from 'lodash/mapValues';
import template from 'lodash/template';

const makeTemplateFunction = tmpl =>
  template(escape(tmpl), { interpolate: /\$\{([\s\S]+?)\}/g });

export default config => {
  const templateFunctions = mapValues(config.text, makeTemplateFunction);

  return (key, data) => {
    const tmpl = templateFunctions[key];
    if (tmpl == null) {
      console.warn(`template ${key} not found`);
      return '';
    } else {
      return tmpl(data);
    }
  };
};
