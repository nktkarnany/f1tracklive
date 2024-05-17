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
    race.value?.date_start
      ? isLiveWithOffset(race.value?.date_start, race.value?.gmt_offset, race.value.date_end)
      : false
  );

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
    cars,
    // Getters
    isLive,
    // Actions
    setLoadingRace,
    updateRace
  };
});
