import { IUser } from '../reducers/types';

export const ascendingComparator = (firstUser: IUser, secondUser: IUser) => {
  if (firstUser.age === secondUser.age) {
    return 0;
  }
  return firstUser.age > secondUser.age ? 1 : -1;
};
