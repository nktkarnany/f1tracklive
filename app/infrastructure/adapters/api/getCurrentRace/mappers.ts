import type { SessionRawResponse, GetCurrentRaceApiRes } from './types';

export function toGetCurrentRaceResponse(res: SessionRawResponse): GetCurrentRaceApiRes {
  return {
    session_key: res.session_key,
    session_name: res.session_name,
    meeting_key: res.meeting_key,
    date_start: res.date_start,
    date_end: res.date_end,
    location: res.location,
    gmt_offset: res.gmt_offset,
    circuit_key: res.circuit_key,
    year: res.year
  } as GetCurrentRaceApiRes;
}
