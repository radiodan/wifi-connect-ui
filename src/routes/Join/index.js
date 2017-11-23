import { Component } from 'preact';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Pane from '../../components/Pane';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import Wave from '../../components/Wave';

import style from './style';

export default class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passphrase: props.passphrase,
    };
  }

  renderTitleWithSsid = ssid => (
    <Text
      heading
      html={this.props
        .translate('join.title', { ssid })
        .replace(ssid, `<strong>${ssid}</strong>`)}
    />
  );

  updatePassphrase = evt => this.setState({ passphrase: evt.target.value });
  savePassphrase = () => {
    this.props.onNext({ passphrase: this.state.passphrase });
  };

  render() {
    const { step, ssid, translate, onBack } = this.props;
    const { passphrase } = this.state;

    return (
      <div class={style.container}>
        <div class={`${style.flex} ${style.header}`}>
          <Header
            images={<Wave level={2} />}
            step={step}
            title={this.renderTitleWithSsid(ssid)}
            body={translate('join.body')}
          />
        </div>
        <Pane class={style.body} padding>
          <TextInput
            label={translate('join.passwordLabel')}
            onInput={this.updatePassphrase}
            value={passphrase}
          />
          <div class={style.actions}>
            <Button onClick={onBack}>{translate('join.back')}</Button>
            <Button primary onClick={this.savePassphrase}>
              {translate('join.next')}
            </Button>
          </div>
        </Pane>
      </div>
    );
  }
}
