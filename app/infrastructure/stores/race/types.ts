import type { Race } from '@domain/Race';

export type RaceStoreState = {
  loadingRace: Ref<boolean>;
  race: Ref<Race | null>;
};

export type RaceStoreActions = {
  setLoadingRace(loading: boolean): void;
  updateRace(race: Race): void;
};
