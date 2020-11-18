import { AuthApi } from "../actions";

export const mapStateToProps = state => {
  return {
    authapi: state.AuthApi,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getAsteroidInfo: (id) => {
      dispatch(AuthApi.getAsteroidInfo(id));
    },
    resetAsteroidInfo: () => {
      dispatch(AuthApi.resetAsteroidInfo());
    },
    getAsteroidIds: () => {
      dispatch(AuthApi.getAsteroidIds());
    },
    resetAsteroidIds: () => {
      dispatch(AuthApi.resetAsteroidIds());
    },
  };
};
