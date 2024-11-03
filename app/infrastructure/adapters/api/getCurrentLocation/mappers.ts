import type { LocationRawResponse, GetCurrentLocationApiRes } from './types';

export function toGetCurrentLocationResponse(res: LocationRawResponse): GetCurrentLocationApiRes {
  return {
    driver_number: res.driver_number,
    location: {
      x: res.x,
      y: res.y,
      z: res.z
    }
  } as GetCurrentLocationApiRes;
}
