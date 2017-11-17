import { h } from 'preact';

import style from './style';

const TextInput = ({ label, onInput, value }) => (
  <div class={style.container}>
    <label class={style.label}>
      <span class={style.labelText}>{label}</span>
      <input class={style.input} type="text" onInput={onInput} value={value} />
    </label>
  </div>
);

export default TextInput;
