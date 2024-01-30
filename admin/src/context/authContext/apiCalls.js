import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";

export const login = (user, dispatch) => {
  dispatch(loginStart());

  axios
    .post(`${import.meta.env.VITE_SERVER}/api/auth/login`, user)
    .then((res) => {
      res.data.user.isAdmin && dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFailure());
    });
};
