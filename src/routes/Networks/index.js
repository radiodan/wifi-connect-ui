import { h, Component } from 'preact';

import Header from '../../components/Header';
import Pane from '../../components/Pane';
import List from './components/List';

import wave from '../../assets/ui/wave.svg';

import style from './style';

export default class Networks extends Component {
  renderList = () => (
    <List
      header="Available Networks"
      items={[
        'Kabelsalat',
        'EasyBox-727567',
        'Bevernfunk_III',
        'Singularity',
        'Intruders',
        'FRITZ!Box 7362',
        'WLAN-P4TFMZ',
        'FRITZ!Box 7412',
        'EasyBox-727567'
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
        <Pane class={style.body}>{this.renderList()}</Pane>
      </div>
    );
  }
}
