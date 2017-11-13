import { h, Component } from 'preact';

import List from './components/List';

import style from './style';

export default class Networks extends Component {
  renderList = () => (
    <List
      items={['AB_123', 'BevernFunk']}
      onSelected={value => this.props.onNext({ ssid: value })}
    />
  );
  render() {
    return (
      <div class={style.container}>
        <h1>Connect Radiodan</h1>
        <p>Select a Wi-Fi network for Radioodan to join</p>
        {this.renderList()}
      </div>
    );
  }
}
