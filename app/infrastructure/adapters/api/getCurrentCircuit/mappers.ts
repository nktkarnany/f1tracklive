import type { FeatureCollection } from '@domain/Circuit';

import type { MeetingsRawResponse, GetCurrentCircuitApiRes } from './types';

export async function toGetCurrentCircuitResponse(res: MeetingsRawResponse): Promise<GetCurrentCircuitApiRes> {
  const searchTerms = [res.location, res.country_name];
  const regex = new RegExp(searchTerms.join('|'), 'i');

  const { body } = await queryContent('f1-locations-2024').findOne();

  const location = body.find((l: any) => {
    return regex.test(l.location);
  });

  let currentTrack: FeatureCollection | null = null;

  if (location && location.id) {
    currentTrack = (await queryContent(`circuits/${location.id}`).findOne()) as unknown as FeatureCollection;
  }

  const circuit: GetCurrentCircuitApiRes = {
    circuit_key: res.circuit_key,
    location: res.location,
    country_name: res.country_name,
    meeting_name: res.meeting_name,
    geoJSON: currentTrack ?? null
  };

  return circuit;
}
