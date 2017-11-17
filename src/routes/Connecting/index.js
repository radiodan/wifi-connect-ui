import { Component } from 'preact';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Pane from '../../components/Pane';
import wave from '../../assets/ui/wave.svg';

import style from './style.css';

export default class Connect extends Component {
  render() {
    return (
      <div class={style.container}>
        <div class={style.header}>
          <Header
            images={[wave]}
            title="Connecting"
            body="Radiodan is now connecting. This page will automatically close when the process is done."
          />
        </div>
      </div>
    );
  }
}
