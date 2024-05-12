// Importing Store
import { useRaceStore } from '@infra/stores/race';

// Importing Entities
import type { Race } from '@domain/Race';

type StoreAdapter = {
  loadingRace: boolean;
  race: Race | null;
  setLoadingRace(l: boolean): void;
  updateRace(race: Race): void;
};

export function raceStoreAdapter(): StoreAdapter {
  return useRaceStore();
}
