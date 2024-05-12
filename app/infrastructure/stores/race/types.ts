import type { Race } from '@domain/Race';

export type RaceStoreState = {
  loadingRace: Ref<boolean>;
  race: Ref<Race | null>;
};

export type RaceStoreActions = {
  setLoadingRace(l: boolean): void;
  updateRace(r: Race): void;
};
