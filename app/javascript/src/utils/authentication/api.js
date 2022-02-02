import axios, { request } from 'axios';

axios.defaults.headers.common['Accept'] = 'application/json';

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

  const response = await request(options);
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
        password_confirmation: passwordConfirmation,
      },
    },
  };

  const response = await request(options);
  return response;
};

export const signout = async (email) => {
  const options = {
    method: 'DELETE',
    url: '/api/v1/users/sign_out',
    data: {
      user: {
        email,
      },
    },
  };

  const response = await request(options);
  return response;
};

export const isAuthed = async () => {
  const options = {
    method: 'GET',
    url: '/api/v1/authentication-check',
  };

  const response = await request(options);
  return response;
};
