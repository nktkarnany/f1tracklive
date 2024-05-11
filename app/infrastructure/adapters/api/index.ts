import type { ApiAdapter } from './types';

import { getCurrentCircuitCall } from './getCurrentCircuit';

export function apiAdapter(): ApiAdapter {
  return {
    getCurrentCircuit: getCurrentCircuitCall
  };
}
