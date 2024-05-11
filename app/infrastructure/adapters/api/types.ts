import type { GetCurrentCircuitApiReq, GetCurrentCircuitApiRes } from './getCurrentCircuit/types';
import type { GetCurrentDriversApiReq, GetCurrentDriversApiRes } from './getCurrentDrivers/types';

export type ApiAdapter = {
  getCurrentCircuit(req: GetCurrentCircuitApiReq): Promise<GetCurrentCircuitApiRes>;
  getCurrentDrivers(req: GetCurrentDriversApiReq): Promise<GetCurrentDriversApiRes>;
};
