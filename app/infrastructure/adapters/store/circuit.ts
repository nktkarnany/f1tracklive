// Importing Store
import { useCircuitStore } from '@infra/stores/circuit';

// Importing Entities
import type { Circuit } from '@domain/Circuit';

type StoreAdapter = {
  loadingCircuit: boolean;
  circuit: Circuit | null;
  setLoadingCircuit(l: boolean): void;
  updateCircuit(c: Circuit): void;
};

export function circuitStoreAdapter(): StoreAdapter {
  return useCircuitStore();
}
