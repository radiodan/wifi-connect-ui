import { h } from 'preact';

import style from './style.css';

const Pane = ({
  children,
  class: className = '',
  flex = true,
  padding = false,
  stretch = false,
  transparent = false,
}) => (
  <div
    class={`${className} ${style.container} ${flex ? style.flex : ''} ${
      padding ? style.padding : ''
    } ${transparent ? style.transparent : ''}`}
  >
    <div class={`${style.inner} ${stretch ? style.innerStretch : ''}`}>
      {children}
    </div>
  </div>
);

export default Pane;
