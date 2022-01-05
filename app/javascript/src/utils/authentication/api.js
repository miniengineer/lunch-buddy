import { request } from 'axios';

const baseRequest = (options) => {
  options.headers = { Accept: 'application/json' };
  return request(options);
};

export const signin = async (email, password) => {
  const options = {
    method: 'POST',
    url: '/api/v1/users/sign_in',
    data: {
      user: {
        email,
        password,
      },
    },
  };

  const response = await baseRequest(options);
  return response;
};

export const signup = async (email, password, passwordConfirmation) => {
  const options = {
    method: 'POST',
    url: '/api/v1/users',
    data: {
      user: {
        email,
        password,
        passwordConfirmation,
      },
    },
  };

  const response = await baseRequest(options);
  return response;
};

export const isAuthed = async () => {
  const options = {
    method: 'GET',
    url: '/api/v1/authentication-check',
  };

  const response = await baseRequest(options);
  return response;
};
