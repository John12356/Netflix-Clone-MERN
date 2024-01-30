import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListFailure,
  getListStart,
  getListSuccess,
} from "./ListAction";
import axios from "axios";

export const getList = (dispatch) => {
  dispatch(getListStart());
  axios
    .get(`${import.meta.env.VITE_SERVER}/api/list`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(getListSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getListFailure());
    });
};

export const deleteList = (id, dispatch) => {
  dispatch(deleteListStart());
  axios
    .delete(`${import.meta.env.VITE_SERVER}/api/list/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(deleteListSuccess(id));
    })
    .catch((err) => {
      console.log(err);
      dispatch(deleteListFailure());
    });
};

export const createList = (list, dispatch) => {
  console.log(list);
  dispatch(createListStart());
  axios
    .post(`${import.meta.env.VITE_SERVER}/api/list/`, list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(createListSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(createListFailure());
    });
};
