/* eslint-disable indent */
export enum API_ROUTES {
  GET_CURRENT_RACE,
  GET_CURRENT_CIRCUIT,
  GET_CURRENT_DRIVERS,
  GET_LATEST_POSITIONS
}

export function getApiRoute(type: API_ROUTES, params?: any): string {
  const BASE_URL = 'https://api.openf1.org/v1';

  const searchParams = new URLSearchParams();
  switch (type) {
    case API_ROUTES.GET_CURRENT_RACE:
      return `${BASE_URL}/sessions?session_key=latest`;

    case API_ROUTES.GET_CURRENT_CIRCUIT:
      if (params.circuit_key) searchParams.append('circuit_key', params.circuit_key);
      return `${BASE_URL}/meetings?year=2024&${searchParams.toString()}`;

    case API_ROUTES.GET_CURRENT_DRIVERS:
      if (params.session_key) searchParams.append('session_key', params.session_key);
      return `${BASE_URL}/drivers?${searchParams.toString()}`;

    case API_ROUTES.GET_LATEST_POSITIONS:
      if (params.session_key) searchParams.append('session_key', params.session_key);
      return `${BASE_URL}/position?${searchParams.toString()}`;
  }
}
