export type Car = {
  driver_number: number;
  position: number;
  location: {
    x: number;
    y: number;
    z: number;
  } | null;
};
