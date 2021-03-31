import { AGE_SORTING_TYPES, IUser, IUsersState } from './types';
import { UserActionTypes } from '../actions/users';
import { DELETE_USER, FETCH_USERS, FILTER_USERS, INCREMENT_OFFSET, INCREMENT_OFFSET_PENDING } from '../actions/types';

const initialUsersState: IUsersState = {
  users: [],
  offset: 1,
  isPending: false,
  errorMessage: '',
  filters: {
    name: '',
    ageSortingType: AGE_SORTING_TYPES.ASC,
  },
};

export function usersReducer(state: IUsersState = initialUsersState, action: UserActionTypes): IUsersState {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
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
        isPending: false,
      };
    case INCREMENT_OFFSET_PENDING:
      return {
        ...state,
        isPending: true,
      };
    default:
      return state;
  }
}
