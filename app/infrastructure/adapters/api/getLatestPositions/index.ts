// Importing Req & Res Objects
import type { GetLatestPositionApiReq, PositionsRawResponseObj, GetLatestPositionApiRes } from './types';
import { toGetLatestPositionsResponse } from './mappers';

// Importing Config
import { API_ROUTES, getApiRoute } from '../config';

export function getLatestPositionsCall(req: GetLatestPositionApiReq): Promise<GetLatestPositionApiRes> {
  const { get } = useAxios();

  const url = getApiRoute(API_ROUTES.GET_LATEST_POSITIONS, req);

  return get(url).then(async (data) => toGetLatestPositionsResponse(data as PositionsRawResponseObj[]));
}
