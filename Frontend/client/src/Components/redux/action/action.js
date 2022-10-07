export const getProducts = () => async (dispatch) => {
  try {
    const res = await fetch("/getproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log("data from action ", data);
    dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: data });
  } catch (error) {
    dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
  }
};
