// Importing Adapters
import { apiAdapter } from '@infra/adapters/api';
import { raceStoreAdapter } from '@infra/adapters/store/race';
import { driverStoreAdapter } from '@infra/adapters/store/driver';

export async function loadPositionsUseCase(session_key: number): Promise<void> {
  const { getLatestPositions } = apiAdapter();
  const { updateCars } = raceStoreAdapter();
  const { updatePositions } = driverStoreAdapter();

  return getLatestPositions({ session_key })
    .then((cars) => {
      updateCars(cars);
      updatePositions(cars.map((c) => c.driver_number));
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) console.error(err.response.data.message);
    })
    .finally(() => {});
}
