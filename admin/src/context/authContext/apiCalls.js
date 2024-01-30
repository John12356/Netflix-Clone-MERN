import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";

export const login = (user, dispatch) => {
  dispatch(loginStart());

  axios
    .post("http://localhost:8080/api/auth/login", user)
    .then((res) => {
      console.log(res.data);
      res.data.isAdmin && dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFailure());
    });
};
