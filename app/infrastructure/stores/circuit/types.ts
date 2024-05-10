import type { Circuit } from '@domain/Circuit';

export type CircuitStoreState = {
  loadingCircuit: Ref<boolean>;
  circuit: Ref<Circuit | null>;
};

export type CircuitStoreActions = {
  setLoadingCircuit(loading: boolean): void;
  updateCircuit(circuit: Circuit): void;
};
