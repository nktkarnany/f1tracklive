import type { Driver } from './Driver';

export type Car = {
  id: number;
  driver: Driver;
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
  active: boolean;
};
