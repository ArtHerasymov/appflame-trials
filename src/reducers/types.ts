export interface IUser {
  id: string;
  name: string;
  age: number;
  avatar: string;
}

export interface ISearchFilters {
  name?: string;
  ageSortingType: string;
}

export interface IUsersState {
  isPending: boolean;
  users: IUser[];
  offset: number;
  errorMessage: string;
  filters: ISearchFilters;
}

export interface IUserPayload {
  users: IUser[];
}

export const AGE_SORTING_TYPES = {
  ASC: 'ascending',
  DSC: 'descending',
};
