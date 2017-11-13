import { h } from 'preact';

import styles from './styles.css';

export default ({ heading = false, children }) =>
  heading ? (
    <h1 className={styles.heading}>{children}</h1>
  ) : (
    <p className={styles.body}>{children}</p>
  );
