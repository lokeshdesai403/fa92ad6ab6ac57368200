import * as CallerConstants from "../constants/apiconstants/CallerConstants";
import * as ProcessTypes from "../constants/apiconstants/ProcessTypes";

const initialState = {
  _asteroidInfoProcess: {
    status: ProcessTypes.IDLE,
    data: {},
  },
  _asteroidIdProcess: {
    status: ProcessTypes.IDLE,
    data: {},
  },
};

export default function authApi(state = initialState, action) {
  switch (action.type) {
    case CallerConstants.GET_ASTEROID_INFO: {
      return {
        ...state,
        _asteroidInfoProcess: {
          status: ProcessTypes.SUCCESS,
          data: action.payload,
        },
      };
    }
    case CallerConstants.GET_ASTEROID_INFO_FAIL: {
      return {
        ...state,
        _asteroidInfoProcess: {
          status: ProcessTypes.FAIL,
          data: action.payload,
        },
      };
    }
    case CallerConstants.RESET_ASTEROID_INFO: {
      return {
        ...state,
        _asteroidInfoProcess: {
          status: ProcessTypes.IDLE,
          data: {},
        },
      };
    }
    case CallerConstants.GET_ASTEROID_IDS: {
      return {
        ...state,
        _asteroidIdProcess: {
          status: ProcessTypes.SUCCESS,
          data: action.payload,
        },
      };
    }
    case CallerConstants.GET_ASTEROID_IDS_FAIL: {
      return {
        ...state,
        _asteroidIdProcess: {
          status: ProcessTypes.FAIL,
          data: action.payload,
        },
      };
    }
    case CallerConstants.RESET_ASTEROID_IDS: {
      return {
        ...state,
        _asteroidIdProcess: {
          status: ProcessTypes.IDLE,
          data: {},
        },
      };
    }
    default: {
      return state;
    }
  }
}
