// Importing Store
import { useRaceStore } from '@infra/stores/race';

// Importing Entities
import type { Race } from '@domain/Race';
import type { Car } from '@domain/Car';

type StoreAdapter = {
  loadingRace: boolean;
  race: Race | null;
  cars: Array<Car>;
  isLive: boolean;
  setLoadingRace(l: boolean): void;
  updateRace(race: Race): void;
  updateCars(cars: Car[]): void;
  updateCarLocation(car: Car): void;
};

export function raceStoreAdapter(): StoreAdapter {
  return useRaceStore();
}
