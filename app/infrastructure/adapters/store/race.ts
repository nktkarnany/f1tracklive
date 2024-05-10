// Importing Store
import { useRaceStore } from '@infra/stores/race';

// Importing Entities
import type { Flag, Race } from '@domain/Race';
import type { Car } from '@domain/Car';

type StoreAdapter = {
  loadingRace: boolean;
  race: Race | null;
  sessionStarted: boolean;
  sessionEnded: boolean;
  setLoadingRace(l: boolean): void;
  updateRace(race: Race): void;
  refreshCars(cars: Car[]): void;
  pushCar(car: Car): void;
  updateCar(car: Car): void;
  updateFlag(flag: Flag): void;
};

export function raceStoreAdapter(): StoreAdapter {
  return useRaceStore();
}
