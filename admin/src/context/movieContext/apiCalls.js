import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMovieFailure,
  getMovieStart,
  getMovieSuccess,
} from "./MovieAction";
import axios from "axios";

export const getMovies = (dispatch) => {
  dispatch(getMovieStart());
  axios
    .get(`${import.meta.env.VITE_SERVER}/api/movie`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(getMovieSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getMovieFailure());
    });
};

export const deleteMovies = (id, dispatch) => {
  dispatch(deleteMovieStart());
  axios
    .delete(`${import.meta.env.VITE_SERVER}/api/movie/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(deleteMovieSuccess(id));
    })
    .catch((err) => {
      console.log(err);
      dispatch(deleteMovieFailure());
    });
};

export const createMovies = (movie, dispatch) => {
  console.log(movie);
  dispatch(createMovieStart());
  axios
    .post(`${import.meta.env.VITE_SERVER}/api/movie/`, movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(createMovieSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(createMovieFailure());
    });
};
