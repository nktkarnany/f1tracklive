export type GetCurrentLocationApiReq = {
  driver_number: number;
  session_key: number;
};

export type LocationRawResponse = {
  date: string;
  driver_number: number;
  meeting_key: number;
  session_key: number;
  x: number;
  y: number;
  z: number;
};

export type GetCurrentLocationApiRes = {
  driver_number: number;
  location: {
    x: number;
    y: number;
    z: number;
  };
};
