import root from 'window-or-global';

export default () =>
  root
    .fetch(`${__webpack_public_path__}config.json`)
    .then(response => response.json());
