// Importing Entities
import type { Driver } from '@domain/Driver';

// Importing Store Types
import type { DriverStoreState, DriverStoreAction } from './types';

type Store = DriverStoreState & DriverStoreAction;

export const useDriverStore = defineStore<string, Store>('DriverStore', (): Store => {
  // State
  const loadingDrivers = ref<boolean>(false);
  const drivers = ref<Driver[]>([]);

  // Actions
  function setLoadingDrivers(l: boolean) {
    loadingDrivers.value = l;
  }

  function refreshDrivers(d: Driver[]) {
    drivers.value = d;
  }

  return {
    // State
    loadingDrivers,
    drivers,
    // Actions
    setLoadingDrivers,
    refreshDrivers
  };
});
