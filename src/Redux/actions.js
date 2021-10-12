import { CREATE, FETCH_ALL_REQUEST , FETCH_ALL_SUCCESS , FETCH_ALL_FAILURE } from "./actionType";
import axios from "axios";

const createData = (payload) => {
  return {
    type: CREATE,
    payload: payload,
  };
};
const fetchDataRequest = () => {
    return {
      type: FETCH_ALL_REQUEST,
    };
  };
  const fetchDataSuccess = (payload) => {
    return {
      type: FETCH_ALL_SUCCESS,
      payload: payload,
    };
  };
  
  const fetchDataFailure = () => {
    return {
      type: FETCH_ALL_FAILURE,
    };
  };



export const createDataRequest = (data) => async (dispatch) => {
  try {
    let response = await axios.post(
      "https://json-server-mocker-data.herokuapp.com/notedata",
      data
    );
    dispatch(createData(response.data));
    // console.log(response)
  } catch (error) {
    console.log(error);
  }
};

 export const fetchAllDataRequest = () => async (dispatch) => {
     dispatch(fetchDataRequest())
  try {
    let response = await axios.get(
      "https://json-server-mocker-data.herokuapp.com/notedata"
    );
    dispatch(fetchDataSuccess(response))
    // console.log(response.data)
  } catch (error) {
    dispatch(fetchDataFailure())
  }
};
