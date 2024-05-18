import type { Driver } from '@domain/Driver';

export type DriverStoreState = {
  loadingDrivers: Ref<boolean>;
  drivers: Ref<Driver[]>;
};

export type DriverStoreAction = {
  setLoadingDrivers(l: boolean): void;
  refreshDrivers(d: Driver[]): void;
  updatePositions(drivers: number[]): void;
};
