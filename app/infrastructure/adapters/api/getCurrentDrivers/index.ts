// Importing Req & Res Objects
import type { GetCurrentDriversApiReq, DriversRawResponse, GetCurrentDriversApiRes } from './types';
import { toGetCurrentDriversResponse } from './mappers';

// Importing Config
import { API_ROUTES, getApiRoute } from '../config';

export function getCurrentDriversCall(req: GetCurrentDriversApiReq): Promise<GetCurrentDriversApiRes> {
  const { get } = useAxios();

  const url = getApiRoute(API_ROUTES.GET_CURRENT_DRIVERS, req);

  return get(url).then((data) => toGetCurrentDriversResponse(data as DriversRawResponse));
}
