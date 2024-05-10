import type { Flag, Race } from '@domain/Race';
import type { Car } from '@domain/Car';

export type RaceStoreState = {
  loadingRace: Ref<boolean>;
  race: Ref<Race | null>;
  sessionStarted: Ref<boolean>;
  sessionEnded: Ref<boolean>;
};

export type RaceStoreActions = {
  setLoadingRace(loading: boolean): void;
  updateRace(race: Race): void;
  refreshCars(cars: Car[]): void;
  pushCar(car: Car): void;
  updateCar(car: Car): void;
  updateFlag(flag: Flag | null): void;
};
