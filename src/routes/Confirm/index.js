import { h, Component } from 'preact';

import api from '../../lib/api';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Pane from '../../components/Pane';
import Text from '../../components/Text';
import Wave from '../../components/Wave';

import style from './style.css';

const ErrorMessage = () => (
  <div class={style.error}>
    <Text>There was an error, please go back and try again.</Text>
  </div>
);

export default class Confirm extends Component {
  state = {
    error: null,
  };

  connect = async () => {
    const { ssid, passphrase } = this.props;

    try {
      await api.connect({
        ssid,
        passphrase,
      });

      this.props.onNext();
    } catch (error) {
      console.error(error);
      this.setState({ error });
    }
  };

  renderActions = () => (
    <div class={style.actions}>
      <Button onClick={this.props.onBack}>Back</Button>
      <Button primary onClick={this.connect}>
        Connect
      </Button>
    </div>
  );

  renderError = () => (this.state.error ? <ErrorMessage /> : null);

  render() {
    const { step, ssid, onBack } = this.props;

    return (
      <div class={style.container}>
        <div class={`${style.flex} ${style.header}`}>
          <Header
            images={<Wave level={3} />}
            step={step}
            title="Important notes"
            body={`Your Radiodan will connect to ${
              ssid
            } after restarting. Make sure your
              device is connected to the same WiFi network.`}
          />
        </div>
        <Pane class={style.body} transparent padding>
          {this.renderActions()}
          {this.renderError()}
        </Pane>
      </div>
    );
  }
}
