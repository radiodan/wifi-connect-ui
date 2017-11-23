import { h } from 'preact';

import Text from '../../../../components/Text';
import styles from './styles';

const ListHeader = ({ children }) => (
  <Text heading class={styles.heading}>
    <span class={styles.headingInner}>{children}</span>
  </Text>
);

const ListItem = ({ children, onClick }) => (
  <li class={styles.item} onClick={onClick}>
    <span class={styles.itemInner}>{children}</span>
  </li>
);

export default ({ header = null, items, onSelected }) => (
  <div class={styles.container}>
    {header ? <ListHeader>{header}</ListHeader> : null}
    <ul class={styles.list}>
      {items.map((item, index) => (
        <ListItem key={`${item}_${index}`} onClick={() => onSelected(item)}>
          {item}
        </ListItem>
      ))}
    </ul>
  </div>
);
