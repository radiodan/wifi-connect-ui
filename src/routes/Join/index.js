import { Component } from 'preact';

export default class Join extends Component {
  state = {
    password: null
  };

  updatePassword = evt => this.setState({ password: evt.target.value });
  savePassword = () => {
    this.props.onNext({ password: this.state.password });
  };

  render() {
    const { ssid, onBack } = this.props;
    const { password } = this.state;

    return (
      <div>
        <h1>{ssid} password</h1>
        <p>Enter password or leave blank for no password</p>
        <label>
          <span>Password</span>
          <input type="text" value={password} onInput={this.updatePassword} />
        </label>

        <button onClick={onBack}>Back</button>
        <button onClick={this.savePassword}>Save</button>
      </div>
    );
  }
}
