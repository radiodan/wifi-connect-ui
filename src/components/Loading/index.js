import { h } from 'preact';

import style from './style.css';

const Item = ({ position }) => (
  <span class={`${style.item} ${style[`bounce${position}`]}`} />
);

const Loading = () => (
  <div class={style.spinner}>
    <Item position={1} />
    <Item position={2} />
    <Item position={3} />
  </div>
);

export default Loading;
