import { ISearchFilters, IUser, IUsersState } from '../reducers/types';
import {
  DELETE_USER,
  FILTER_USERS,
  GET_USERS_FAILED,
  GET_USERS_STARTED,
  GET_USERS_SUCCESS,
  INCREMENT_OFFSET,
} from './types';

interface IGetUsersStartedAction {
  type: typeof GET_USERS_STARTED;
}

interface IGetUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: IUser[];
}

interface IGetUsersFailedAction {
  type: typeof GET_USERS_FAILED;
  payload: string;
}

interface IDeleteUserAction {
  type: typeof DELETE_USER;
  payload: string;
}

interface IFilterUsersAction {
  type: typeof FILTER_USERS;
  payload: ISearchFilters;
}

interface IIncrementOffsetAction {
  type: typeof INCREMENT_OFFSET;
  payload: number;
}

export const getUsersStartedAction = () => ({
  type: GET_USERS_STARTED,
});

export const incrementOffsetAction = (offset: number) => ({
  type: INCREMENT_OFFSET,
  payload: offset,
});

export const getUsersSuccessAction = (users: IUser[]) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailedAction = (errorMessage: string) => ({
  type: GET_USERS_FAILED,
  payload: errorMessage,
});

export const deleteUserAction = (id: string) => ({
  type: DELETE_USER,
  payload: id,
});

export const filterUsersAction = (filterParams: ISearchFilters) => ({
  type: FILTER_USERS,
  payload: filterParams,
});

export type UserActionTypes =
  | IGetUsersStartedAction
  | IGetUsersSuccessAction
  | IGetUsersFailedAction
  | IDeleteUserAction
  | IFilterUsersAction
  | IIncrementOffsetAction;

export type GetUsersTypes = IGetUsersStartedAction & IGetUsersSuccessAction & IGetUsersFailedAction;
