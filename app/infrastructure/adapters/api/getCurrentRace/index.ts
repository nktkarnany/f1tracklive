// Importing Req & Res Objects
import type { SessionRawResponse, GetCurrentRaceApiRes } from './types';
import { toGetCurrentRaceResponse } from './mappers';

// Importing Config
import { API_ROUTES, getApiRoute } from '../config';

export function getCurrentRaceCall(): Promise<GetCurrentRaceApiRes> {
  const { get } = useAxios();

  const url = getApiRoute(API_ROUTES.GET_CURRENT_RACE);

  return get(url).then((data) => toGetCurrentRaceResponse(data[0] as SessionRawResponse));
}
