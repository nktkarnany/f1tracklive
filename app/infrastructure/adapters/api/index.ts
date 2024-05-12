import type { ApiAdapter } from './types';

import { getCurrentCircuitCall } from './getCurrentCircuit';
import { getCurrentDriversCall } from './getCurrentDrivers';
import { getCurrentRaceCall } from './getCurrentRace';

export function apiAdapter(): ApiAdapter {
  return {
    getCurrentCircuit: getCurrentCircuitCall,
    getCurrentDrivers: getCurrentDriversCall,
    getCurrentRace: getCurrentRaceCall
  };
}
