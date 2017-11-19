import api from './api';

// https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise/38339199#38339199
const isPromise = thing => Promise.resolve(thing) === thing;

const createFetchSSIDMock = (ok = true, result = ['abc', 'def']) => {
  return jest.fn(() => Promise.resolve({ ok, json: () => result }));
};

const createFetchPOSTMock = (ok = true) => {
  return jest.fn(() => Promise.resolve({ ok }));
};

describe('api', () => {
  describe('ssids', () => {
    let globalFetch = null;
    beforeEach(() => {
      globalFetch = global.fetch;

      global.fetch = createFetchSSIDMock();
    });

    afterEach(() => {
      global.fetch = globalFetch;
    });

    test('returns a promise', () => {
      const response = api.ssids();
      expect(isPromise(response)).toBe(true);
    });

    test('GETs the /ssid endpoint of the API', () => {
      api.ssids();
      expect(global.fetch).toHaveBeenCalledWith('/ssid');
    });

    test('returns an array of SSID names', () => {
      return api.ssids().then(ssids => {
        expect(ssids).toEqual(['abc', 'def']);
      });
    });

    test('throws if response not OK', done => {
      global.fetch = createFetchSSIDMock(false);

      api.ssids().catch(err => {
        expect(err.message).toBe('Response was not OK');
        done();
      });
    });
  });
  describe('connect', () => {
    let globalFetch = null;
    beforeEach(() => {
      globalFetch = global.fetch;

      global.fetch = createFetchPOSTMock();
    });

    afterEach(() => {
      global.fetch = globalFetch;
    });

    test('throws if no params provided', () => {
      api
        .connect()
        .catch(err => /object containing ssid not provided/i.test(err.message));
    });

    test('throws if empty object provided', () => {
      api
        .connect({})
        .catch(err => /object containing ssid not provided/i.test(err.message));
    });

    test('returns a promise', () => {
      const response = api.connect({
        ssid: 'my ssid',
        passphrase: 'my password',
      });
      expect(isPromise(response)).toBe(true);
    });

    test('POSTs to the /connect endpoint of the API', () => {
      api.connect({ ssid: 'my ssid', passphrase: 'my password' });
      expect(global.fetch).toHaveBeenCalledWith('/connect', {
        method: 'POST',
        body: 'ssid=my%20ssid&passphrase=my%20password',
      });
    });

    test('throws if response not OK', done => {
      global.fetch = createFetchPOSTMock(false);

      api.connect({ ssid: 'ssid', passphrase: 'pass' }).catch(err => {
        expect(err.message).toBe('Response was not OK');
        done();
      });
    });
  });
});
