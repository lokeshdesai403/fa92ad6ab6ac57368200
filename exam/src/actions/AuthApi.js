import axios from "axios";
import * as ProcessTypes from "../constants/apiconstants/ProcessTypes";
import * as CallerConstants from "../constants/apiconstants/CallerConstants";
import * as ApiConstants from "../constants/apiconstants/ApiConstants";
import { dispatchResponse } from "./ActionDispatcher";

export const getAsteroidInfo = (id) => {
  return (dispatch) => {

    let finalURL = ApiConstants.BASE_PATH + id + "?api_key=" + ApiConstants.NASA_API_KEY;

    let headers = {
      "Content-Type": "application/json",
    };

    axios.get(finalURL, { headers: headers })
      .then((response) => {
        dispatch(dispatchResponse(response, CallerConstants.GET_ASTEROID_INFO));
      })
      .catch((error) => {
        dispatch(dispatchResponse(error, CallerConstants.GET_ASTEROID_INFO_FAIL));
      });
  };
};

export const resetAsteroidInfo = () => {
  return (dispatch) => {
    dispatch(dispatchResponse({}, CallerConstants.RESET_ASTEROID_INFO));
  };
};

export const getAsteroidIds = () => {
  return (dispatch) => {
    let finalURL = ApiConstants.ASTEROID_IDS_URL + "?api_key=" + ApiConstants.NASA_API_KEY;

    let headers = {
      "Content-Type": "application/json",
    };

    axios.get(finalURL, { headers: headers })
      .then((response) => {
        dispatch(dispatchResponse(response, CallerConstants.GET_ASTEROID_IDS));
      })
      .catch((error) => {
        dispatch(dispatchResponse(error, CallerConstants.GET_ASTEROID_IDS_FAIL));
      });
  };
};

export const resetAsteroidIds = () => {
  return (dispatch) => {
    dispatch(dispatchResponse({}, CallerConstants.RESET_ASTEROID_IDS));
  };
};

