export type Car = {
  driver_number: number;
  drs: number;
  gear: number;
  speed: number;
  gap_to_leader: number | null;
  interval: number | null;
  position: number;
  lap_number: number;
  location: {
    x: number;
    y: number;
    z: number;
  };
};
