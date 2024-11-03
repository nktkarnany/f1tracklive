// Importing Entities
import type { Race } from '@domain/Race';
import type { Car } from '@domain/Car';

// Importing Store Types
import type { RaceStoreState, RaceStoreGetters, RaceStoreActions } from './types';

type Store = RaceStoreState & RaceStoreGetters & RaceStoreActions;

export const useRaceStore = defineStore<string, Store>('RaceStore', (): Store => {
  // State
  const loadingRace = ref<boolean>(false);
  const race = ref<Race | null>(null);
  const cars = ref<Car[]>([]);

  // Getters
  const isLive = computed(() =>
    race.value ? isBetweenStartAndEnd(race.value.date_start, race.value.date_end) : false
  );

  // Actions
  function setLoadingRace(l: boolean) {
    loadingRace.value = l;
  }

  function updateRace(r: Race) {
    race.value = r;
  }

  function updateCars(c: Car[]) {
    cars.value = c;
  }

  function updateCarLocation(c: Car) {
    const i = cars.value.findIndex((car) => car.driver_number == c.driver_number);
    cars.value[i] = c;
  }

  return {
    // State
    loadingRace,
    race,
    cars,
    // Getters
    isLive,
    // Actions
    setLoadingRace,
    updateRace,
    updateCars,
    updateCarLocation
  };
});
