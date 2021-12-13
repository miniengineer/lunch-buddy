import { request } from 'axios';

export const signin = async (email, password) => {
  const options = {
    method: 'POST',
    url: '/api/v1/users/sign_in',
    headers: { Accept: 'application/json' },
    data: {
      user: {
        email,
        password,
      },
    },
  };

  const response = await request(options);
  return response;
};

export const signup = async (email, password) => {
  const options = {
    method: 'POST',
    url: '/api/v1/users/sign_in',
    headers: { Accept: 'application/json' },
    data: {
      user: {
        email,
        password,
      },
    },
  };

  const response = await request(options);
  return response;
};
