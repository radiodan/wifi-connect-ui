import createThemeCss from '../style/theme';

export default config => {
  const head = document.querySelector('head');
  const style = document.createElement('style');

  const css = createThemeCss(config);
  style.innerHTML = css;
  head.appendChild(style);
};
