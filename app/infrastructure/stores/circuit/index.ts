// Importing Entities
import type { Circuit } from '@domain/Circuit';

// Importing Store Types
import type { CircuitStoreState, CircuitStoreActions } from './types';

type Store = CircuitStoreState & CircuitStoreActions;

export const useCircuitStore = defineStore<string, Store>('CircuitStore', (): Store => {
  // State
  const loadingCircuit = ref<boolean>(false);
  const circuit = ref<Circuit | null>(null);

  // Actions
  function setLoadingCircuit(l: boolean) {
    loadingCircuit.value = l;
  }

  function updateCircuit(c: Circuit) {
    circuit.value = c;
  }

  return {
    // State
    loadingCircuit,
    circuit,
    // Actions
    setLoadingCircuit,
    updateCircuit
  };
});
