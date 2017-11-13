import { h } from 'preact';

import styles from './styles.css';

const Button = ({ children, onClick }) => (
  <button class={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
