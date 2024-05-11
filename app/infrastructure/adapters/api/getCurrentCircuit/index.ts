// Importing Req & Res Objects
import type { GetCurrentCircuitApiReq, MeetingsRawResponse, GetCurrentCircuitApiRes } from './types';
import { toGetCurrentCircuitResponse } from './mappers';

// Importing Config
import { API_ROUTES, getApiRoute } from '../config';

export function getCurrentCircuitCall(req: GetCurrentCircuitApiReq): Promise<GetCurrentCircuitApiRes> {
  const { get } = useAxios();

  const url = getApiRoute(API_ROUTES.GET_CURRENT_CIRCUIT, req);

  return get(url).then(async (data) => await toGetCurrentCircuitResponse(data[0] as MeetingsRawResponse));
}
