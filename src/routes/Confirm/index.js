import { Component } from 'preact';

export default class Confirm extends Component {
  render() {
    const { ssid, onBack, onNext } = this.props;

    return (
      <div>
        <h1>Important notes</h1>
        <p>
          Your Radiodan will connect to {ssid} after restarting. Make sure your
          device is connected to the same WiFi network.
        </p>

        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Connect</button>
      </div>
    );
  }
}
