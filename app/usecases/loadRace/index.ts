// Importing Adapters
import { apiAdapter } from '@infra/adapters/api';
import { raceStoreAdapter } from '@infra/adapters/store/race';

export async function loadRaceUseCase(): Promise<void> {
  const { getCurrentRace } = apiAdapter();
  const { setLoadingRace, updateRace } = raceStoreAdapter();

  setLoadingRace(true);

  return getCurrentRace()
    .then((race) => {
      updateRace(race);
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) console.error(err.response.data.message);
    })
    .finally(() => {
      setLoadingRace(false);
    });
}
