// Importing Entities
import type { Flag, Race } from '@domain/Race';
import type { Car } from '@domain/Car';

// Importing Store Types
import type { RaceStoreState, RaceStoreActions } from './types';

type Store = RaceStoreState & RaceStoreActions;

export const useRaceStore = defineStore<string, Store>('RaceStore', (): Store => {
  // State
  const loadingRace = ref<boolean>(false);
  const race = ref<Race | null>(null);
  const sessionStarted = ref<boolean>(false);
  const sessionEnded = ref<boolean>(false);

  // Actions
  function setLoadingRace(l: boolean) {
    loadingRace.value = l;
  }

  function updateRace(r: Race) {
    race.value = r;
  }

  function refreshCars(cars: Car[]) {
    if (race.value) race.value.cars = cars;
  }

  function pushCar(c: Car) {
    if (race.value) race.value.cars.push(c);
  }

  function updateCar(c: Car) {
    if (race.value) {
      const index = race.value.cars.findIndex((obj) => obj.id === c.id);
      if (index !== -1) {
        race.value.cars[index] = c;
      }
    }
  }

  function updateFlag(f: Flag) {
    if (race.value) race.value.flag = f;
  }

  return {
    // State
    loadingRace,
    race,
    sessionStarted,
    sessionEnded,
    // Actions
    setLoadingRace,
    updateRace,
    refreshCars,
    pushCar,
    updateCar,
    updateFlag
  };
});
