import { h, Component } from 'preact';

import Text from '../Text';

import style from './style';

export default class Header extends Component {
  renderStep = () =>
    this.props.step != null ? (
      <div class={style.step}>{this.props.step}</div>
    ) : null;
  renderIndicator = () => this.props.indicator;
  renderImages = () => (
    <div class={style.image}>
      {this.props.images.map((image, index) => (
        <img
          key={index}
          class={index === 0 ? style.imageFirst : style.imageStacked}
          src={image}
        />
      ))}
    </div>
  );
  render() {
    const { body, images, title } = this.props;

    return (
      <header class={style.container}>
        {this.renderImages()}
        {this.renderStep()}
        {this.renderIndicator()}
        <Text heading class={style.title}>
          {title}
        </Text>
        <Text class={style.body}>{body}</Text>
      </header>
    );
  }
}
