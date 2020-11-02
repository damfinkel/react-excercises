import { api } from '../../services/api';

export type Value = 'false' | 'true' | '';

export interface Values {
  name: string;
  equality1: string;
  equality2: string;
  equality3: string;
  equality4: string;
  equality5: string;
  equality6: string;
  equality7: string;
  equality8: string;
  equality9: string;
  equality10: string;
  equality11: string;
  equality12: string;
  equality13: string;
}

interface Response {
  result: string;
}

export const getIdentityResult = (values: Values) => api.post<Response>('/identity', values);