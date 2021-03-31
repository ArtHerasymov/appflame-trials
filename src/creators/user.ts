import users from '../../assets/data/users.json';
import {
  deleteUserAction,
  filterUsersAction,
  getUsersFailedAction,
  getUsersStartedAction,
  getUsersSuccessAction,
  GetUsersTypes,
  incrementOffsetAction,
} from '../actions/users';
import { ISearchFilters, IUser } from '../reducers/types';
import { COULD_NOT_READ_USERS } from '../utils/errorMessages';
import { Dispatch } from 'redux';

const ascendingComparator = (firstUser: IUser, secondUser: IUser) => {
  if (firstUser.age === secondUser.age) {
    return 0;
  }
  return firstUser.age > secondUser.age ? 1 : -1;
};

export function fetchUsers() {
  return async (dispatch: Dispatch<GetUsersTypes>) => {
    dispatch(getUsersStartedAction());
    try {
      if (users) {
        dispatch(getUsersSuccessAction(users.sort(ascendingComparator)));
      } else {
        throw new Error(COULD_NOT_READ_USERS);
      }
    } catch (e) {
      dispatch(getUsersFailedAction(e.message));
    }
  };
}

export function incrementOffset(offset: number) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(incrementOffsetAction(offset));
  };
}

export function deleteUser(id: string) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(deleteUserAction(id));
  };
}

export function getSearchResults(filterParams: ISearchFilters) {
  return async (dispatch: any) => {
    dispatch(filterUsersAction(filterParams));
  };
}
