import root from 'window-or-global';

const FAKE_SSIDS = [
  'Kabelsalat',
  'EasyBox-727567',
  'Bevernfunk_III',
  'Singularity',
  'Intruders',
  'FRITZ!Box 7362',
  'WLAN-P4TFMZ',
  'FRITZ!Box 7412',
  'EasyBox-727567',
];

const fakeApi = {
  ssids: async () => FAKE_SSIDS,
  connect: async () => {},
};

const realApi = {
  ssids: async () => {
    const response = await root.fetch('/ssid');

    if (!response.ok) {
      throw new Error('Response was not OK', response);
    }

    return await response.json();
  },
  connect: async ({ ssid, passphrase = '' } = { ssid: null }) => {
    if (ssid == null) {
      throw new Error('Object containing ssid not provided');
    }

    const response = await root.fetch('/connect', {
      method: 'POST',
      body: `ssid=${encodeURIComponent(ssid)}&passphrase=${encodeURIComponent(
        passphrase
      )}`,
    });

    if (!response.ok) {
      const error = new Error('Response was not OK');
      error.response = response;
      throw error;
    }

    return response;
  },
};

const api = process.env.NODE_ENV === 'development' ? fakeApi : realApi;

export default api;
