export interface CapPlayInstallReferrerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
