import ACTION_TYPES from '../actionTypes';

export const fetchData = () => ({
  type: ACTION_TYPES.AUTH_PENDING,
});

export const fetchSuccess = (data: any) => ({
  type: ACTION_TYPES.AUTH_SUCCESS,
  payload: data,
});

export const fetchError = (error: any) => ({
  type: ACTION_TYPES.AUTH_ERROR,
  payload: error,
});
