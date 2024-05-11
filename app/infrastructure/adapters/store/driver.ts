// Importing Store
import { useDriverStore } from '@infra/stores/driver';

// Importing Entities
import type { Driver } from '@domain/Driver';

type StoreAdapter = {
  loadingDrivers: boolean;
  drivers: Driver[];
  setLoadingDrivers(l: boolean): void;
  refreshDrivers(d: Driver[]): void;
};

export function driverStoreAdapter(): StoreAdapter {
  return useDriverStore();
}
