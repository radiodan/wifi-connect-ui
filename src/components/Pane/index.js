import { h } from 'preact';

import style from './style.css';

const Pane = ({
  children,
  class: className = '',
  flex = true,
  transparent = false
}) => (
  <div
    class={`${className} ${style.container} ${flex ? style.flex : ''} ${
      transparent ? style.transparent : ''
    }`}
  >
    {children}
  </div>
);

export default Pane;
