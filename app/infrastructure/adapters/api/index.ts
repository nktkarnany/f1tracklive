import type { ApiAdapter } from './types';

import { getCurrentRaceCall } from './getCurrentRace';
import { getCurrentCircuitCall } from './getCurrentCircuit';
import { getCurrentDriversCall } from './getCurrentDrivers';
import { getLatestPositionsCall } from './getLatestPositions';
import { getCurrentLocationCall } from './getCurrentLocation';

export function apiAdapter(): ApiAdapter {
  return {
    getCurrentRace: getCurrentRaceCall,
    getCurrentCircuit: getCurrentCircuitCall,
    getCurrentDrivers: getCurrentDriversCall,
    getLatestPositions: getLatestPositionsCall,
    getCurrentLocation: getCurrentLocationCall
  };
}
