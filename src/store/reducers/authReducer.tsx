import ACTION_TYPES,{AuthState} from '../actionTypes';

const initialState: AuthState = {
  loading: false,
  data: '',
  error: '',
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.AUTH_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.AUTH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export {authReducer};
