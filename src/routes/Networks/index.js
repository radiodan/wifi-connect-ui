import { h, Component } from 'preact';

import api from '../../lib/api';

import Header from '../../components/Header';
import Message from '../../components/Message';
import Pane from '../../components/Pane';
import Wave from '../../components/Wave';

import List from './components/List';

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
      <p>{this.props.translate('networks.errorTitle')}</p>
      <p>
        <a href="" onClick={this.handleRequestSsid}>
          {this.props.translate('networks.errorTryAgain')}
        </a>
      </p>
    </Message>
  );
  renderList = () => (
    <List
      header={this.props.translate('networks.availableNetworks')}
      items={this.state.ssids}
      onSelected={this.nextWithSsid}
    />
  );
  renderBody = () =>
    this.state.error ? this.renderError() : this.renderList();
  render({ translate }) {
    return (
      <div class={style.container}>
        <div class={`${style.flex} ${style.header}`}>
          <Header
            images={<Wave level={1} />}
            step={this.props.step}
            title={translate('networks.title')}
            body={translate('networks.body')}
          />
        </div>
        <Pane class={style.body} stretch>
          {this.renderBody()}
        </Pane>
      </div>
    );
  }
}
