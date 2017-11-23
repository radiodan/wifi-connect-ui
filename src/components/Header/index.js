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
      {Array.isArray(this.props.images)
        ? this.props.images.map((image, index) => (
            <img
              key={index}
              class={index === 0 ? style.imageFirst : style.imageStacked}
              src={image}
            />
          ))
        : this.props.images}
    </div>
  );
  render() {
    const { body, images, title } = this.props;

    return (
      <header class={style.container}>
        {this.renderImages()}
        {this.renderStep()}
        {this.renderIndicator()}
        <div class={style.title}>
          <Text heading>{title}</Text>
        </div>
        <div class={style.body}>
          <Text>{body}</Text>
        </div>
      </header>
    );
  }
}
