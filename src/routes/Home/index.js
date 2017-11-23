import { h, Component } from 'preact';

import Button from '../../components/Button';
import Text from '../../components/Text';
import Header from '../../components/Header';

import device from '../../assets/ui/device.svg';
import highlight from '../../assets/ui/highlight.svg';

import style from './style';

class Home extends Component {
  render() {
    return (
      <div class={style.container}>
        <div class={`${style.center} ${style.header}`}>
          <Header
            images={[highlight, device]}
            title="Radiodan Configuration"
            body="Setup Radiodan"
          />
        </div>
        <div class={`${style.center} ${style.body}`}>
          <Button wide onClick={this.props.onNext} primary contrast>
            Start
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
