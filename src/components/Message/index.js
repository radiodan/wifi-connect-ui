import { h } from 'preact';

import style from './style.css';

const Message = ({
  children,
  class: className = '',
  flex = true,
  error = false
}) => (
  <div
    class={`${className} ${style.container} ${flex ? style.flex : ''} ${
      error ? style.isError : ''
    }`}
  >
    <div class={style.inner}>{children}</div>
  </div>
);

export default Message;
