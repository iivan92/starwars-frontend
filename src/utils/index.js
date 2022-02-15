/* eslint-disable import/prefer-default-export */
/**
 * Returns true if the value (string, array or object) is empty, undefined or null
 * @param {undefined|null|object|array|string } value
 * @returns {boolean}
 */
export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (Array.isArray(value) && value.length === 0);
