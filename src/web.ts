import { WebPlugin } from '@capacitor/core';

import type { CapPlayInstallReferrerPlugin } from './definitions';

export class CapPlayInstallReferrerWeb extends WebPlugin implements CapPlayInstallReferrerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
