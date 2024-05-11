// Importing Adapters
import { apiAdapter } from '@infra/adapters/api';
import { driverStoreAdapter } from '@infra/adapters/store/driver';

export async function loadDriversUseCase(session_key?: number | string, meeting_key?: number | string): Promise<void> {
  const { getCurrentDrivers } = apiAdapter();
  const { setLoadingDrivers, refreshDrivers } = driverStoreAdapter();

  setLoadingDrivers(true);

  return getCurrentDrivers({ meeting_key, session_key })
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
