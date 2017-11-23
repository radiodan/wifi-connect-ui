import { h, Component } from 'preact';

import api from '../../lib/api';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Pane from '../../components/Pane';
import Text from '../../components/Text';
import Wave from '../../components/Wave';

import style from './style.css';

const ErrorMessage = ({ message }) => (
  <div class={style.error}>
    <Text>{message}</Text>
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
      <Button onClick={this.props.onBack} contrast>
        {this.props.translate('confirm.back')}
      </Button>
      <Button primary onClick={this.connect} contrast>
        {this.props.translate('confirm.next')}
      </Button>
    </div>
  );

  renderError = () =>
    this.state.error ? (
      <ErrorMessage message={this.props.translate('confirm.error')} />
    ) : null;

  render({ translate }) {
    const { step, ssid, onBack } = this.props;

    return (
      <div class={style.container}>
        <div class={`${style.flex} ${style.header}`}>
          {this.renderBodyWithSsid(ssid)}
          <Header
            images={<Wave level={3} />}
            step={step}
            title={translate('confirm.title')}
            body={translate('confirm.body', { ssid })}
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
