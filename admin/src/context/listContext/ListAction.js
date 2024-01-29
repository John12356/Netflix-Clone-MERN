export const getListStart = () => ({
  type: "GET_LIST_START",
});

export const getListSuccess = (lists) => ({
  type: "GET_LIST_SUCCESS",
  payload: lists,
});

export const getListFailure = () => ({
  type: "GET_LIST_FAILURE",
});

//delete
export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});

export const deleteListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});

//post
export const createListStart = () => ({
  type: "CREATE_LIST_START",
});

export const createListSuccess = (movie) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: movie,
});

export const createListFailure = () => ({
  type: "CREATE_LIST_FAILURE",
});
