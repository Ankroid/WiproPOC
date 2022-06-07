const ACTION_TYPES = {
    AUTH_PENDING: 'AUTH_PENDING',
    AUTH_SUCCESS: 'AUTH_SUCCESS',
    AUTH_ERROR: 'AUTH_ERROR',
  };
 
  export interface AuthState {
    loading: boolean,
    data: any,
    error: string | null,
  }

  export default ACTION_TYPES;