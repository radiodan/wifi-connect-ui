import root from 'window-or-global';

export default () =>
  root.fetch('./config.json').then(response => response.json());
