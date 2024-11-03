// Importing Req & Res Objects
import type { GetCurrentLocationApiReq, LocationRawResponse, GetCurrentLocationApiRes } from './types';
import { toGetCurrentLocationResponse } from './mappers';

// Importing Config
import { API_ROUTES, getApiRoute } from '../config';

export async function getCurrentLocationCall(req: GetCurrentLocationApiReq): Promise<GetCurrentLocationApiRes> {
  const { get } = useAxios();

  const url = getApiRoute(API_ROUTES.GET_CURRENT_LOCATION, req);

  return get(url).then((data) => toGetCurrentLocationResponse(data[0] as LocationRawResponse));
}
