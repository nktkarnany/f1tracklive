import type { Car } from '@domain/Car';

export type GetLatestPositionApiReq = {
  session_key: number;
};

export type PositionsRawResponseObj = {
  session_key: number;
  meeting_key: number;
  driver_number: number;
  date: Date;
  position: number;
};

export type GetLatestPositionApiRes = Array<Car>;
