import type { GetCurrentRaceApiRes } from './getCurrentRace/types';
import type { GetCurrentCircuitApiReq, GetCurrentCircuitApiRes } from './getCurrentCircuit/types';
import type { GetCurrentDriversApiReq, GetCurrentDriversApiRes } from './getCurrentDrivers/types';

export type ApiAdapter = {
  getCurrentRace(): Promise<GetCurrentRaceApiRes>;
  getCurrentCircuit(req: GetCurrentCircuitApiReq): Promise<GetCurrentCircuitApiRes>;
  getCurrentDrivers(req: GetCurrentDriversApiReq): Promise<GetCurrentDriversApiRes>;
};
