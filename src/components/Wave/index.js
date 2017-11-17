import { h, Component } from 'preact';

import style from './style.css';

const waveClasses = (num, active = false) =>
  `${style.wave} ${style[`wave${num}`]} ${
    active ? style.waveActive : style.waveInactive
  }`;

const cols = {
  wave: {
    active: 'hsla(0, 0%, 100%, 1)',
    inactive: 'hsla(0, 0%, 100%, 0.5)',
  },
  source: {
    active: 'hsla(49, 100%, 60%, 1)',
    inactive: 'hsla(49, 100%, 60%, 1)',
  },
};

const waveCol = (target, current) =>
  target <= current ? cols.wave.active : cols.wave.inactive;

class Wave extends Component {
  static defaultProps = {
    level: 3,
  };
  constructor(props) {
    super(props);

    this.state = {
      level: props.level,
    };
  }

  componentDidMount() {
    if (this.props.animating) {
      this.startAnimating();
    }
  }

  componentWillReceiveProps({ level, animating }) {
    this.setState({
      level,
    });

    if (this.props.animating !== animating) {
      animating ? this.startAnimating() : this.stopAnimating();
    }
  }

  startAnimating = () => {
    this.currentAnimationId = this.scheduleAnimationFrame();
  };
  stopAnimating = () => {
    if (this.currentAnimationId) {
      clearTimeout(this.currentAnimationId);
    }
  };
  scheduleAnimationFrame = () => {
    if (this.currentAnimationId) {
      clearTimeout(this.currentAnimationId);
    }

    this.currentAnimationId = setTimeout(this.updateAnimationFrame, 1000);
  };
  updateAnimationFrame = () => {
    this.setState(
      { level: (this.state.level + 1) % 4 },
      this.scheduleAnimationFrame
    );
  };

  render() {
    const { level } = this.state;

    console.log('elvel', level);

    return (
      <div class={style.container}>
        <svg
          width="120px"
          height="97px"
          viewBox="0 0 120 97"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Signal" transform="translate(6.000000, 5.000000)">
              <path
                d="M54.055,69 C48.511,69 44,73.511 44,79.055 C44,84.6 48.511,89.11 54.055,89.11 C59.6,89.11 64.11,84.6 64.11,79.055 C64.11,73.511 59.6,69 54.055,69 M54.055,73 C57.399,73 60.11,75.711 60.11,79.055 C60.11,82.399 57.399,85.11 54.055,85.11 C50.711,85.11 48,82.399 48,79.055 C48,75.711 50.711,73 54.055,73"
                fill={cols.source.active}
                class={style.source}
              />
              <path
                d="M0,22.573 C6.973,15.6 15.277,9.956 24.498,6.056 C33.718,2.156 43.856,0 54.497,0 C65.138,0 75.276,2.156 84.496,6.056 C93.717,9.956 102.02,15.6 108.994,22.573"
                stroke={waveCol(3, level)}
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                class={waveClasses(3)}
              />
              <path
                d="M18,41.049 C22.649,36.4 28.185,32.638 34.332,30.038 C40.479,27.438 47.237,26 54.331,26 C61.425,26 68.184,27.438 74.331,30.038 C80.478,32.638 86.013,36.4 90.662,41.049"
                stroke={waveCol(2, level)}
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                class={waveClasses(2)}
              />
              <path
                d="M36,58.531 C38.327,56.204 41.097,54.322 44.173,53.02 C47.25,51.719 50.632,51 54.182,51 C57.733,51 61.115,51.719 64.191,53.02 C67.268,54.322 70.038,56.204 72.365,58.531"
                stroke={waveCol(1, level)}
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                class={waveClasses(1)}
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
export default Wave;
