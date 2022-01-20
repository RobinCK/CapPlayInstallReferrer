import { registerPlugin } from '@capacitor/core';

import type { CapPlayInstallReferrerPlugin } from './definitions';

const CapPlayInstallReferrer = registerPlugin<CapPlayInstallReferrerPlugin>('CapPlayInstallReferrer', {
  web: () => import('./web').then(m => new m.CapPlayInstallReferrerWeb()),
});

export * from './definitions';
export { CapPlayInstallReferrer };
