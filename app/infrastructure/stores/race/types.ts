import type { Race } from '@domain/Race';
import type { Car } from '@domain/Car';

export type RaceStoreState = {
  loadingRace: Ref<boolean>;
  race: Ref<Race | null>;
  cars: Ref<Car[]>;
};

export type RaceStoreGetters = {
  isLive: ComputedRef<boolean>;
};

export type RaceStoreActions = {
  setLoadingRace(l: boolean): void;
  updateRace(r: Race): void;
};
