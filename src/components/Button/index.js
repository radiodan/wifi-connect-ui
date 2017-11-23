import { h } from 'preact';

import style from './styles.css';

const Button = ({ children, onClick, primary = false, contrast = false }) => (
  <button
    class={`${style.button} ${primary ? style.primary : style.secondary} ${
      contrast ? 'contrast' : ''
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
