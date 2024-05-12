// Importing Entities
import type { Race } from '@domain/Race';

// Importing Store Types
import type { RaceStoreState, RaceStoreActions } from './types';

type Store = RaceStoreState & RaceStoreActions;

export const useRaceStore = defineStore<string, Store>('RaceStore', (): Store => {
  // State
  const loadingRace = ref<boolean>(false);
  const race = ref<Race | null>(null);

  // Actions
  function setLoadingRace(l: boolean) {
    loadingRace.value = l;
  }

  function updateRace(r: Race) {
    race.value = r;
  }

  return {
    // State
    loadingRace,
    race,
    // Actions
    setLoadingRace,
    updateRace
  };
});
