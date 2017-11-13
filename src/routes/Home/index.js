import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style';

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>Radiodan Configuration</h1>
        <p>Setup Radiodan</p>

        <button onClick={this.props.onNext}>Start</button>
      </div>
    );
  }
}
