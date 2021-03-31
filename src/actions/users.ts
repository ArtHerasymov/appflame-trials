import { ISearchFilters, IUser } from '../reducers/types';
import { DELETE_USER, FETCH_USERS, FILTER_USERS, INCREMENT_OFFSET, INCREMENT_OFFSET_PENDING } from './types';
import users from '../../assets/data/users.json';
import { ascendingComparator } from '../utils/functions';

interface IFetchUsersAction {
  type: FETCH_USERS;
  payload: IUser[];
}

interface IDeleteUserAction {
  type: DELETE_USER;
  payload: string;
}

interface IFilterUsersAction {
  type: FILTER_USERS;
  payload: ISearchFilters;
}

interface IIncrementOffsetAction {
  type: INCREMENT_OFFSET;
  payload: number;
}

interface IIncrementOffsetPendingAction {
  type: INCREMENT_OFFSET_PENDING;
}

export const incrementOffsetAction = (offset: number) => ({
  type: INCREMENT_OFFSET,
  payload: offset,
});

export const fetchUsersAction = () => ({
  type: FETCH_USERS,
  payload: ((users as unknown) as IUser[]).sort(ascendingComparator),
});

export const deleteUserAction = (id: string) => ({
  type: DELETE_USER,
  payload: id,
});

export const startIncrementOffset = () => ({
  type: INCREMENT_OFFSET_PENDING,
});

export const filterUsersAction = (filterParams: ISearchFilters) => ({
  type: FILTER_USERS,
  payload: filterParams,
});

export type UserActionTypes =
  | IFetchUsersAction
  | IDeleteUserAction
  | IFilterUsersAction
  | IIncrementOffsetAction
  | IIncrementOffsetPendingAction;
