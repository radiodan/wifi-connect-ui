import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from './routes/Home';
import Networks from './routes/Networks';
import Join from './routes/Join';
import Confirm from './routes/Confirm';
import Connecting from './routes/Connecting';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  state = {
    ssid: null,
    passphrase: null,
  };

  route = path => Router.route(path);

  showNetworkList = () =>
    this.setState({ ssid: null }, () => this.route('/networks'));

  selectNetwork = ({ ssid }) =>
    this.setState(
      {
        ssid,
      },
      () => this.route('/networks/join')
    );

  savePassphrase = ({ passphrase }) =>
    this.setState(
      {
        passphrase,
      },
      () => this.route('/networks/confirm')
    );

  confirm = () => this.route('/networks/connect');

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home {...this.state} path="/" onNext={this.showNetworkList} />
          <Networks
            {...this.state}
            path="/networks"
            onNext={this.selectNetwork}
            step={1}
          />
          <Join
            {...this.state}
            path="/networks/join"
            onBack={this.showNetworkList}
            onNext={this.savePassphrase}
            step={2}
          />
          <Confirm
            {...this.state}
            path="/networks/confirm"
            onBack={this.selectNetwork}
            onNext={this.confirm}
            step={3}
          />
          <Connecting {...this.state} path="/networks/connect" />
        </Router>
      </div>
    );
  }
}
