// reducers.js
import { SET_PELICULAS, SET_SERIES } from './actions';

const initialState = {
  peliculas: [],
  series: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PELICULAS:
      return { ...state, peliculas: action.payload };
    case SET_SERIES:
      return { ...state, series: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
