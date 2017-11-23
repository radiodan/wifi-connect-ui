import { h, Component } from 'preact';

import Loading from '../../components/Loading';
import style from './style';

export default class extends Component {
  render() {
    return (
      <div class={style.container}>
        <Loading />
      </div>
    );
  }
}
