import type { Driver } from '@domain/Driver';

export type GetCurrentDriversApiReq = {
  meeting_key?: number | string;
  session_key?: number | string;
};

export type DriversRawResponse = [
  {
    session_key: number;
    meeting_key: number;
    broadcast_name: string;
    country_code: string;
    first_name: string;
    full_name: string;
    headshot_url: string;
    last_name: string;
    driver_number: number;
    team_colour: string;
    team_name: string;
    name_acronym: string;
  }
];

export type GetCurrentDriversApiRes = Driver[];
