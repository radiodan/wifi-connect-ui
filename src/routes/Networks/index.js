import { h, Component } from 'preact';

import Header from '../../components/Header';
import List from './components/List';

import wave from '../../assets/ui/wave.svg';

import style from './style';

export default class Networks extends Component {
  renderList = () => (
    <List
      header="Available Networks"
      items={[
        'AB_123',
        'BevernFunk',
        'Another',
        'my really long network name',
        'Network !!!'
      ]}
      onSelected={value => this.props.onNext({ ssid: value })}
    />
  );
  render() {
    return (
      <div class={style.container}>
        <div class={`${style.flex} ${style.header}`}>
          <Header
            images={[wave]}
            step={1}
            title="Connect Radiodan"
            body="Select a Wi-Fi network for Radiodan to join"
          />
        </div>
        <div class={`${style.flex} ${style.body}`}>{this.renderList()}</div>
      </div>
    );
  }
}
