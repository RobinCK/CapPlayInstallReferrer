import { WebPlugin } from '@capacitor/core';

import type { CapPlayInstallReferrerPlugin } from './definitions';

export class CapPlayInstallReferrerWeb extends WebPlugin implements CapPlayInstallReferrerPlugin {
  async GetReferrer(): Promise<any> {
    //console.log('GetReferrer', options);
    return "Not referred";
  }
}
