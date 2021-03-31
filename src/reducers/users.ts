import { AGE_SORTING_TYPES, IUser, IUsersState } from './types';
import { UserActionTypes } from '../actions/users';
import {
  DELETE_USER,
  FILTER_USERS,
  GET_USERS_FAILED,
  GET_USERS_STARTED,
  GET_USERS_SUCCESS,
  INCREMENT_OFFSET,
} from '../actions/types';

const initialUsersState: IUsersState = {
  users: [],
  offset: 1,
  errorMessage: '',
  isUpdating: false,
  filters: {
    name: '',
    ageSortingType: AGE_SORTING_TYPES.ASC,
  },
};

export function usersReducer(state: IUsersState = initialUsersState, action: UserActionTypes): IUsersState {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isUpdating: false,
      };
    case GET_USERS_STARTED:
      return {
        ...state,
        isUpdating: true,
      };
    case GET_USERS_FAILED:
      return {
        ...initialUsersState,
        errorMessage: action.payload,
      };
    case FILTER_USERS:
      return {
        ...state,
        filters: { ...action.payload },
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user: IUser) => user.id !== action.payload),
      };
    case INCREMENT_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    default:
      return state;
  }
}
