import root from 'window-or-global';

import createThemeCss from '../style/theme';

export default () => {
  const head = document.querySelector('head');
  const style = document.createElement('style');

  return new Promise((resolve, reject) => {
    root
      .fetch('./config.json')
      .then(response => response.json())
      .then(config => {
        const css = createThemeCss(config);
        style.innerHTML = css;
        head.appendChild(style);

        resolve();
      })
      .catch(reject);
  });
};
