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

  renderTitle = title =>
    typeof title === 'string' ? <Text heading>{title}</Text> : title;

  renderBody = body => (typeof body === 'string' ? <Text>{body}</Text> : body);

  render() {
    const { body, images, title } = this.props;

    return (
      <header class={style.container}>
        {this.renderImages()}
        {this.renderStep()}
        {this.renderIndicator()}
        <div class={style.title}>{this.renderTitle(title)}</div>
        <div class={style.body}>{this.renderBody(body)}</div>
      </header>
    );
  }
}
