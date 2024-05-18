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

  function updatePositions(d: number[]) {
    // Create a map from driver numbers to their indices
    const driverIndexMap = new Map(d.map((num, index) => [num, index]));

    // Sort the array of objects based on the map
    drivers.value.sort((a, b) => {
      const indexA = driverIndexMap.get(a.driver_number) ?? Infinity;
      const indexB = driverIndexMap.get(b.driver_number) ?? Infinity;
      return indexA - indexB;
    });
  }

  return {
    // State
    loadingDrivers,
    drivers,
    // Actions
    setLoadingDrivers,
    refreshDrivers,
    updatePositions
  };
});
