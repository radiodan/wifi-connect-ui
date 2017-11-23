import { h } from 'preact';

import styles from './styles.css';

const TextWithHtmlContent = ({
  class: className = '',
  heading = false,
  html,
}) =>
  heading ? (
    <h1
      className={`${styles.heading} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <p
      className={`${styles.body} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

const TextWithChildren = ({
  class: className = '',
  heading = false,
  children,
}) =>
  heading ? (
    <h1 className={`${styles.heading} ${className}`}>{children}</h1>
  ) : (
    <p className={`${styles.body} ${className}`}>{children}</p>
  );

export default ({
  class: className = '',
  heading = false,
  children,
  html = null,
}) =>
  typeof html === 'string' ? (
    <TextWithHtmlContent class={className} header={heading} html={html} />
  ) : (
    <TextWithChildren class={className} header={heading}>
      {children}
    </TextWithChildren>
  );
