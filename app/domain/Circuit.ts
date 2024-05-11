type Coordinate = [number, number];

type Properties = {
  id: string;
  Location: string;
  Name: string;
  opened: number;
  firstgp: number;
  length: number;
  altitude: number;
};

type Geometry = {
  type: string;
  coordinates: Coordinate[];
};

type Feature = {
  type: string;
  properties: Properties;
  bbox: [number, number, number, number];
  geometry: Geometry;
};

export type FeatureCollection = {
  type: string;
  name: string;
  bbox: [number, number, number, number];
  features: Feature[];
};

export type Circuit = {
  key: number;
  geoJSON: FeatureCollection | null;
  location: string;
  country_name: string;
  meeting_name: string;
};
