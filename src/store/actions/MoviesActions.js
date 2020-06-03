import * as actionTypes from './actionTypes';

export const addMovieToFavorite = (movie) => {
  console.log('add')
  return {
    type: actionTypes.ADD_MOVIE_TO_FAVORITE,
    payload: movie
  };
};

export const removeMovieToFavorite = (movieID) => {
  console.log('remove')
  return {
    type: actionTypes.REMOVE_MOVIE_TO_FAVORITE,
    payload: movieID
  };
};