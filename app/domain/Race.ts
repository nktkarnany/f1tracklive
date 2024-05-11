import type { Car } from './Car';

export type Flag = 'GREEN' | 'YELLOW' | 'DOUBLE YELLOW' | 'CHEQUERED';

export type Race = {
  meeting_name: string;
  session_name: string;
  cars: Car[];
  flag: Flag | null;
};
