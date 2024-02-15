// actions.js
export const SET_PELICULAS = 'SET_PELICULAS';
export const SET_SERIES = 'SET_SERIES';

export const setPeliculas = (peliculas) => ({
  type: SET_PELICULAS,
  payload: peliculas,
});

export const setSeries = (series) => ({
  type: SET_SERIES,
  payload: series,
});
