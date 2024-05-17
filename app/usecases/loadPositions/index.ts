// Importing Adapters
import { apiAdapter } from '@infra/adapters/api';
import { raceStoreAdapter } from '@infra/adapters/store/race';

export async function loadPositionsUseCase(session_key: number): Promise<void> {
  const { getLatestPositions } = apiAdapter();
  const { updateCars } = raceStoreAdapter();

  return getLatestPositions({ session_key })
    .then((cars) => {
      updateCars(cars);
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) console.error(err.response.data.message);
    })
    .finally(() => {});
}
