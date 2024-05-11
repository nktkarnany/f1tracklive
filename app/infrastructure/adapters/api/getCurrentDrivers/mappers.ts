import type { DriversRawResponse, GetCurrentDriversApiRes } from './types';

export function toGetCurrentDriversResponse(res: DriversRawResponse): GetCurrentDriversApiRes {
  return res.map((d) => ({
    driver_number: d.driver_number,
    full_name: d.full_name,
    name_acronym: d.name_acronym,
    team_color: '#' + d.team_colour,
    team_name: d.team_name,
    headshot_url: d.headshot_url
  })) as GetCurrentDriversApiRes;
}
