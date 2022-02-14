import axios from 'axios';
import { getToken } from '../utils/localStorage';

const TIMEOUT_MIN = 1;
const TIMEOUT_REQUEST = 1000 * 60 * TIMEOUT_MIN;

export default async (options) => {
  let response = {};
  const { CancelToken } = axios;
  const source = CancelToken.source();
  let waiting = true;

  const finalUrl = `/api/${options.url}`;

  const headers = {
    'Content-Type': 'application/json',
  };
  const token = getToken();
  if (token) {
    headers['x-access-token'] = token;
  }

  const request = {
    url: finalUrl,
    cancelToken: source.token,
    headers,
    ...(options.method ? { method: options.method } : {}),
    ...(options.body ? { data: JSON.stringify(options.body) } : {}),
  };

  let timeout;
  try {
    timeout = setTimeout(() => {
      if (waiting && source) {
        source.cancel('TIMEOUT_ERROR');
      }
    }, TIMEOUT_REQUEST);

    response = await axios(request);
  } catch (err) {
    waiting = false;
    if (timeout) clearTimeout(timeout);
    if (err.message) {
      const error = { message: err.message };
      throw error;
    } else {
      const error = { message: err };
      throw error;
    }
  }
  waiting = false;
  clearTimeout(timeout);
  return response.data;
};
