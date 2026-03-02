import Backendless from 'backendless';

const APP_ID = 'DE7033D5-1332-491A-9336-3BFC94DAEA24';
const API_KEY = '34C3EF70-0366-4ABD-A53B-8A2287DC300A';

export const ensureTokopediaBackendless = () => {
  Backendless.initApp(APP_ID, API_KEY);
  return Backendless;
};

ensureTokopediaBackendless();
export default Backendless



