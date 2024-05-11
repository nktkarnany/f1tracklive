/* eslint-disable indent */
export enum API_ROUTES {
  GET_CURRENT_DRIVERS,
  GET_CURRENT_CIRCUIT
}

export function getApiRoute(type: API_ROUTES, params?: any): string {
  const BASE_URL = 'https://api.openf1.org/v1/';

  const searchParams = new URLSearchParams();
  switch (type) {
    case API_ROUTES.GET_CURRENT_DRIVERS:
      if (params.meeting_key) searchParams.append('meeting_key', params.meeting_key);
      if (params.session_key) searchParams.append('session_key', params.session_key);
      return `${BASE_URL}/drivers?${searchParams.toString()}`;

    case API_ROUTES.GET_CURRENT_CIRCUIT:
      if (params.location) searchParams.append('location', params.location);
      if (params.year) searchParams.append('year', params.year);
      return `${BASE_URL}/meetings?${searchParams.toString()}`;
  }
}
