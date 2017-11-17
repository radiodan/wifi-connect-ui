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
  'EasyBox-727567'
];

const fakeApi = {
  ssids: async () => FAKE_SSIDS
};

const realApi = {
  ssids: async () => {
    const response = await root.fetch('/ssid');
    return await response.json();
  }
};

const api = process.env.NODE_ENV === 'development' ? fakeApi : realApi;

export default api;
