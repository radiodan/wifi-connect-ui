import { h, Component } from 'preact';
import { Router } from 'preact-router';
import root from 'window-or-global';

import applyTheme from './lib/applyTheme';
import cssVariablesPolyfill from './lib/cssVariablesPolyfill';

import Loading from './routes/Loading';
import Home from './routes/Home';
import Networks from './routes/Networks';
import Join from './routes/Join';
import Confirm from './routes/Confirm';
import Connecting from './routes/Connecting';

export default class App extends Component {
  componentDidMount() {
    const shouldRedirectToRoot = !/^\/(networks)?$/.test(
      Router.getCurrentUrl()
    );

    if (shouldRedirectToRoot) {
      this.showIndex();
    }

    applyTheme().then(() => {
      cssVariablesPolyfill();
      this.showWelcome();
    });
  }

  state = {
    themed: false,
    ssid: null,
    passphrase: null,
  };

  route = path => Router.route(path);

  /** Gets fired when the route changes.
   *	@param {Object} event       "change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url   The newly routed URL
   */
  handleRoute = e => {
    let nextState;

    switch (e.url) {
      case '/networks':
        nextState = { ssid: null, passphrase: null };
        break;
      default:
        nextState = {};
    }

    this.setState(nextState);
  };

  back = () => {
    root.history.back();
  };

  showIndex = () => {
    this.route('/');
  };

  showWelcome = () => {
    this.route('/welcome');
  };

  showNetworkList = () => {
    this.route('/networks');
  };

  selectNetwork = ({ ssid }) => {
    this.setState({
      ssid,
    });

    this.route('/networks/join');
  };

  savePassphrase = ({ passphrase }) => {
    this.setState({
      passphrase,
    });
    this.route('/networks/confirm');
  };

  confirm = () => this.route('/networks/connect');

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Loading {...this.state} path="/" />
          <Home {...this.state} path="/welcome" onNext={this.showNetworkList} />
          <Networks
            {...this.state}
            path="/networks"
            onNext={this.selectNetwork}
            step={1}
          />
          <Join
            {...this.state}
            path="/networks/join"
            onBack={this.back}
            onNext={this.savePassphrase}
            step={2}
          />
          <Confirm
            {...this.state}
            path="/networks/confirm"
            onBack={this.back}
            onNext={this.confirm}
            step={3}
          />
          <Connecting {...this.state} path="/networks/connect" />
        </Router>
      </div>
    );
  }
}
