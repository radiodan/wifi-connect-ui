import { h, Component } from 'preact';

import Button from '../../components/Button';
import Text from '../../components/Text';

import device from '../../assets/ui/device.svg';
import highlight from '../../assets/ui/highlight.svg';

import style from './style';

class Home extends Component {
  render() {
    return (
      <div class={style.container}>
        <div>
          <div class={style.image}>
            <img class={style.imageFirst} src={highlight} />
            <img class={style.imageLast} src={device} />
          </div>
          <Text heading>Radiodan Configuration</Text>
          <Text>Setup Radiodan</Text>
        </div>

        <Button onClick={this.props.onNext}>Start</Button>
      </div>
    );
  }
}

export default Home;
