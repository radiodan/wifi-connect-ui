import { h, Component } from 'preact';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Pane from '../../components/Pane';
import wave from '../../assets/ui/wave.svg';

import style from './style.css';

export default class Confirm extends Component {
  render() {
    const { step, ssid, onBack, onNext } = this.props;

    return (
      <div class={style.container}>
        <div class={`${style.flex} ${style.header}`}>
          <Header
            images={[wave]}
            step={step}
            title="Important notes"
            body={`Your Radiodan will connect to ${
              ssid
            } after restarting. Make sure your
              device is connected to the same WiFi network.`}
          />
        </div>
        <Pane class={style.body} transparent>
          <div class={style.actions}>
            <Button onClick={onBack}>Back</Button>
            <Button primary onClick={onNext}>
              Connect
            </Button>
          </div>
        </Pane>
      </div>
    );
  }
}
