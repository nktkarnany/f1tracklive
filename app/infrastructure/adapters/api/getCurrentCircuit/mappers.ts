import type { FeatureCollection } from '@domain/Circuit';

import type { MeetingsRawResponse, GetCurrentCircuitApiRes } from './types';

export async function toGetCurrentCircuitResponse(res: MeetingsRawResponse): Promise<GetCurrentCircuitApiRes> {
  const { body } = await queryContent('tracks').findOne();
  const allTracks: Array<FeatureCollection> = body;

  const currentTrack = allTracks.find((track) => track.features[0].properties.Location == res.location);

  const circuit: GetCurrentCircuitApiRes = {
    circuit_key: res.circuit_key,
    location: res.location,
    country_name: res.country_name,
    meeting_name: res.meeting_name,
    geoJSON: currentTrack ?? null
  };

  return circuit;
}
