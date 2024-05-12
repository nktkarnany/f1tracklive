// Importing Adapters
import { apiAdapter } from '@infra/adapters/api';
import { circuitStoreAdapter } from '@infra/adapters/store/circuit';

export async function loadCircuitUseCase(circuit_key: number): Promise<void> {
  const { getCurrentCircuit } = apiAdapter();
  const { setLoadingCircuit, updateCircuit } = circuitStoreAdapter();

  setLoadingCircuit(true);

  return getCurrentCircuit({ circuit_key })
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
