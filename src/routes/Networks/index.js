import { h, Component } from 'preact';

import api from '../../lib/api';

import Header from '../../components/Header';
import Message from '../../components/Message';
import Pane from '../../components/Pane';
import List from './components/List';

import wave from '../../assets/ui/wave.svg';

import style from './style';

export default class Networks extends Component {
  state = {
    ssids: [],
    error: null,
  };
  componentDidMount() {
    this.fetchSsid();
  }
  fetchSsid = async () => {
    try {
      this.setState({
        error: null,
        ssids: await api.ssids(),
      });
    } catch (error) {
      console.error(error);
      this.setState({
        ssids: [],
        error,
      });
    }
  };
  handleRequestSsid = evt => {
    evt.preventDefault();
    this.fetchSsid();
  };
  nextWithSsid = ssid => this.props.onNext({ ssid });
  renderError = () => (
    <Message error>
      <p>There was an error fetching Wi-Fi networks. 😓</p>
      <p>
        <a href="" onClick={this.handleRequestSsid}>
          Try again
        </a>
      </p>
    </Message>
  );
  renderList = () => (
    <List
      header="Available Networks"
      items={this.state.ssids}
      onSelected={this.nextWithSsid}
    />
  );
  renderBody = () =>
    this.state.error ? this.renderError() : this.renderList();
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
        <Pane class={style.body} stretch>
          {this.renderBody()}
        </Pane>
      </div>
    );
  }
}
