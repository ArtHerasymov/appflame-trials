import { createSelector } from 'reselect';
import { AGE_SORTING_TYPES, ISearchFilters, IUser } from '../reducers/types';
import { RootState } from '../store';

const PAGINATION_LIMIT = 10;

const getUsers = (state: RootState) => state.users.users;
const getFilters = (state: RootState) => state.users.filters;
const getOffset = (state: RootState) => state.users.offset;

export const getFilteredUsers = createSelector(
  [getUsers, getFilters, getOffset],
  (users: IUser[], filters: ISearchFilters, offset: number) => {
    const filteredByName = filters.name
      ? users.filter((user: IUser) => user.name.toLowerCase().startsWith(filters.name?.toLowerCase()!))
      : users;
    if (filters.ageSortingType === AGE_SORTING_TYPES.ASC) {
      return filteredByName.slice(0, offset * PAGINATION_LIMIT);
    } else {
      return filteredByName.slice(filteredByName.length - offset * PAGINATION_LIMIT, filteredByName.length).reverse();
    }
  }
);
