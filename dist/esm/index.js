import { registerPlugin } from '@capacitor/core';
const CapPlayInstallReferrer = registerPlugin('CapPlayInstallReferrer', {
    web: () => import('./web').then(m => new m.CapPlayInstallReferrerWeb()),
});
export * from './definitions';
export { CapPlayInstallReferrer };
//# sourceMappingURL=index.js.map