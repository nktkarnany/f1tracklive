import type { GetCurrentRaceApiRes } from './getCurrentRace/types';
import type { GetCurrentCircuitApiReq, GetCurrentCircuitApiRes } from './getCurrentCircuit/types';
import type { GetCurrentDriversApiReq, GetCurrentDriversApiRes } from './getCurrentDrivers/types';
import type { GetLatestPositionApiReq, GetLatestPositionApiRes } from './getLatestPositions/types';
import type { GetCurrentLocationApiReq, GetCurrentLocationApiRes } from './getCurrentLocation/types';

export type ApiAdapter = {
  getCurrentRace(): Promise<GetCurrentRaceApiRes>;
  getCurrentCircuit(req: GetCurrentCircuitApiReq): Promise<GetCurrentCircuitApiRes>;
  getCurrentDrivers(req: GetCurrentDriversApiReq): Promise<GetCurrentDriversApiRes>;
  getLatestPositions(req: GetLatestPositionApiReq): Promise<GetLatestPositionApiRes>;
  getCurrentLocation(req: GetCurrentLocationApiReq): Promise<GetCurrentLocationApiRes>;
};
