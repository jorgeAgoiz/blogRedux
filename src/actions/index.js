import jsonPlaceHolder from "../apis/jsonPlaceHolder";

// This function return an async function with dispatch as argument, because
// redux-thunk will work in this return statement.
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
