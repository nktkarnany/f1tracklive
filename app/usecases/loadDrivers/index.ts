// Importing Adapters
import { apiAdapter } from '@infra/adapters/api';
import { driverStoreAdapter } from '@infra/adapters/store/driver';

export async function loadDriversUseCase(session_key: number): Promise<void> {
  const { getCurrentDrivers } = apiAdapter();
  const { setLoadingDrivers, refreshDrivers } = driverStoreAdapter();

  setLoadingDrivers(true);

  return getCurrentDrivers({ session_key })
    .then((drivers) => {
      refreshDrivers(drivers);
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) console.error(err.response.data.message);
    })
    .finally(() => {
      setLoadingDrivers(false);
    });
}
