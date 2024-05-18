// Importing Adapters
import { apiAdapter } from '@infra/adapters/api';
import { raceStoreAdapter } from '@infra/adapters/store/race';
import { driverStoreAdapter } from '@infra/adapters/store/driver';

export async function loadDriversUseCase(session_key: number): Promise<void> {
  const { getCurrentDrivers } = apiAdapter();
  const { cars } = raceStoreAdapter();
  const { setLoadingDrivers, refreshDrivers, updatePositions } = driverStoreAdapter();

  setLoadingDrivers(true);

  return getCurrentDrivers({ session_key })
    .then((drivers) => {
      refreshDrivers(drivers);
      if (cars.length > 0) updatePositions(cars.map((c) => c.driver_number));
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) console.error(err.response.data.message);
    })
    .finally(() => {
      setLoadingDrivers(false);
    });
}
