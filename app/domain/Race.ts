export type Flag = 'GREEN' | 'YELLOW' | 'DOUBLE YELLOW' | 'CHEQUERED';

export type Race = {
  session_key: number;
  session_name: string;
  meeting_key: number;
  date_start: string;
  date_end: string;
  location: string;
  gmt_offset: string;
  circuit_key: number;
  year: number;
};
