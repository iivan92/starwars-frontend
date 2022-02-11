/* eslint-disable import/prefer-default-export */

import api from './api';

export const registerUser = async (email, password) =>
  api({
    method: 'post',
    url: 'auth/register',
    body: {
      email,
      password,
    },
  });

export const loginUser = async (email, password) =>
  api({
    method: 'post',
    url: 'auth/login',
    body: {
      email,
      password,
    },
  });
