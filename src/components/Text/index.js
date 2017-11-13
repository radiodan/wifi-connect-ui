import { h } from 'preact';

import styles from './styles.css';

export default ({ class: className = '', heading = false, children }) =>
  heading ? (
    <h1 className={`${styles.heading} ${className}`}>{children}</h1>
  ) : (
    <p className={`${styles.body} ${className}`}>{children}</p>
  );
