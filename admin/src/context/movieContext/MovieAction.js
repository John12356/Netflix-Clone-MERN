export const getMovieStart = () => ({
  type: "GET_MOVIE_START",
});

export const getMovieSuccess = (movies) => ({
  type: "GET_MOVIE_SUCCESS",
  payload: movies,
});

export const getMovieFailure = () => ({
  type: "GET_MOVIE_FAILURE",
});

//delete
export const deleteMovieStart = () => ({
  type: "DELETE_MOVIE_START",
});

export const deleteMovieSuccess = (id) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});
