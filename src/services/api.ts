import { create } from 'apisauce'

export const api = create({
  baseURL: 'https://react-excercises-api.damfinkel.vercel.app',
  headers: { Accept: 'application/json' },
})
