import type { ApiAdapter } from './types';

import { getCurrentCircuitCall } from './getCurrentCircuit';
import { getCurrentDriversCall } from './getCurrentDrivers';

export function apiAdapter(): ApiAdapter {
  return {
    getCurrentCircuit: getCurrentCircuitCall,
    getCurrentDrivers: getCurrentDriversCall
  };
}
