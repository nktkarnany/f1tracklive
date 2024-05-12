import type { Circuit } from '@domain/Circuit';

export type CircuitStoreState = {
  loadingCircuit: Ref<boolean>;
  circuit: Ref<Circuit | null>;
};

export type CircuitStoreActions = {
  setLoadingCircuit(l: boolean): void;
  updateCircuit(c: Circuit): void;
};
