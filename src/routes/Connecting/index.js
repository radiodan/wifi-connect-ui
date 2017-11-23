import { Component } from 'preact';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Pane from '../../components/Pane';
import Wave from '../../components/Wave';

import style from './style.css';

export default class Connect extends Component {
  render({ translate }) {
    return (
      <div class={style.container}>
        <div class={style.header}>
          <Header
            images={<Wave animating />}
            title={translate('connect.title')}
            body={translate('connect.body')}
          />
        </div>
      </div>
    );
  }
}
