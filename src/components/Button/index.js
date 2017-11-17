import { h } from 'preact';

import style from './styles.css';

const Button = ({ children, onClick, primary = false }) => (
  <button
    class={`${style.button} ${primary ? style.primary : style.secondary}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
