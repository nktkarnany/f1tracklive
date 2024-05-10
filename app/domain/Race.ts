import type { Car } from './Car';
import type { Circuit } from './Circuit';

export type Flag = 'GREEN' | 'YELLOW' | 'DOUBLE YELLOW' | 'CHEQUERED';

export type Race = {
  circuit: Circuit;
  cars: Car[];
  session_name: string;
  meeting_name: string;
  flag: Flag | null;
};
