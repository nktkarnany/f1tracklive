// Importing Adapters
import { apiAdapter } from '@infra/adapters/api';
import { circuitStoreAdapter } from '@infra/adapters/store/circuit';

export async function loadCircuitUseCase(location: string, year?: number): Promise<void> {
  const { getCurrentCircuit } = apiAdapter();
  const { setLoadingCircuit, updateCircuit } = circuitStoreAdapter();

  setLoadingCircuit(true);

  return getCurrentCircuit({ location, year })
    .then((circuit) => {
      updateCircuit(circuit);
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) console.error(err.response.data.message);
    })
    .finally(() => {
      setLoadingCircuit(false);
    });
}
