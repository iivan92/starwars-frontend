import api from './api';

export const getAllPeople = async () =>
  api({
    method: 'get',
    url: 'people',
  });

export const getAllPlanets = async () =>
  api({
    method: 'get',
    url: 'planets',
  });

export const getAllStarships = async () =>
  api({
    method: 'get',
    url: 'starships',
  });
