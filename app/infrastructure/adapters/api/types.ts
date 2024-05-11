import type { GetCurrentCircuitApiReq, GetCurrentCircuitApiRes } from './getCurrentCircuit/types';

export type ApiAdapter = {
  getCurrentCircuit(req: GetCurrentCircuitApiReq): Promise<GetCurrentCircuitApiRes>;
};
