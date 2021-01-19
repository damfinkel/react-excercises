import {api} from './api';

import { User } from '../components/ProfileForm/constants';

export const getUser = (id: number) =>
  api.get(`/user/${id}`)


export const editUser = (id: number, data: User) =>
  api.put(`/user/${id}`,
    data
  );