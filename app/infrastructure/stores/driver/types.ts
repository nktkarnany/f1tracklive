import type { Driver } from '@domain/Driver';

export type DriverStoreState = {
  loadingDrivers: Ref<boolean>;
  drivers: Ref<Driver[]>;
};

export type DriverStoreAction = {
  setLoadingDrivers(loading: boolean): void;
  refreshDrivers(drivers: Driver[]): void;
};
