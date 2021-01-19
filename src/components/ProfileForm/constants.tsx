export interface User {
  id: number;
  name: string,
  surname: string,
  phone: number,
  occupation: string,
  email: string,
  password: string
}

export const VALIDATIONS = {
  maxLenght: 30,
  phone: {
    maxLenght: 10,
  },
  pattern: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
  password: {
    pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{6,20}$'
  }
}