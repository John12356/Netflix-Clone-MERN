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
    .get("http://localhost:8080/api/movie", {
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
    .delete(`http://localhost:8080/api/movie/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      console.log(res);
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
    .post("http://localhost:8080/api/movie/", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch(createMovieSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(createMovieFailure());
    });
};
