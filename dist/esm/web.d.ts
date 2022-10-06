import { WebPlugin } from '@capacitor/core';
import type { CapPlayInstallReferrerPlugin } from './definitions';
export declare class CapPlayInstallReferrerWeb extends WebPlugin implements CapPlayInstallReferrerPlugin {
    GetReferrer(): Promise<any>;
}
