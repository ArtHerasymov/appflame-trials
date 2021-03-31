import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { deleteUser, fetchUsers, getSearchResults, incrementOffset } from '../creators/user';
import { ISearchFilters, IUser } from '../reducers/types';
import { ScreenView } from '../elements/ScreenView';
import { HomeStyles } from '../styles/screens/Home';
import { RootState } from '../store';
import { BACKGROUND_COLOR, MAIN_COLOR } from '../styles/colors';
import { EmptyPlaceholder } from '../components/EmptyPlaceholder';
import { Popup } from '../elements/Popup';
import { FilterHeader } from '../components/FilterHeader';
import { UserCard } from '../components/UserCard';
import { getFilteredUsers } from '../selectors';
import { Dispatch } from 'redux';

interface IHomeProps {
  users: IUser[];
  offset: number;
  getUsers: () => void;
  isUpdating: boolean;
  filters: ISearchFilters;
  filterUsers: (searchParams: ISearchFilters) => void;
  removeUser: (id?: string) => void;
  getNextBatch: (offset: number) => void;
}

const Home = ({
  users,
  offset,
  getNextBatch,
  getUsers,
  filters,
  filterUsers,
  removeUser,
  isUpdating = false,
}: IHomeProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<IUser | undefined>();
  const keyExtractor = useCallback((item) => item.id, []);
  const onEndReached = useCallback(() => getNextBatch(offset + 1), [offset]);
  const onDeleteModalInvoked = useCallback((item: IUser) => {
    setSelectedUser(item);
    setModalVisible(true);
  }, []);
  const emptyPlaceholder = useMemo(
    () => <EmptyPlaceholder style={{ height: 300, width: 300, alignSelf: 'center', marginTop: 150 }} />,
    []
  );
  const onDeleteUserPressed = useCallback(() => {
    removeUser(selectedUser?.id);
    setModalVisible(false);
  }, [selectedUser]);
  const onDeleteModalRevoked = useCallback(() => {
    setModalVisible(false);
    setSelectedUser(undefined);
  }, []);
  const renderUserView = ({ item }: ListRenderItemInfo<IUser>) => (
    <UserCard user={item} onDeletePressed={onDeleteModalInvoked} />
  );

  useEffect(() => {
    getUsers();
  }, []);

  if (!users) {
    return null;
  }

  return (
    <ScreenView navigationMenuColor={BACKGROUND_COLOR} statusBarColor={'#4E3976'}>
      <FilterHeader filters={filters} onFilterValuesChanged={filterUsers} />
      <FlatList
        keyExtractor={keyExtractor}
        numColumns={2}
        refreshing={isUpdating}
        refreshControl={
          <RefreshControl
            tintColor={MAIN_COLOR}
            colors={[MAIN_COLOR]}
            onRefresh={() => getNextBatch(1)}
            refreshing={isUpdating}
          />
        }
        ListEmptyComponent={emptyPlaceholder}
        data={users}
        style={HomeStyles.listContainer}
        renderItem={renderUserView}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.001}
      />
      <Popup
        isVisible={modalVisible}
        message={'Are you sure you want to delete this user?'}
        onSubmit={{
          text: 'Yes',
          action: onDeleteUserPressed,
        }}
        onCancel={{
          text: 'No',
          action: onDeleteModalRevoked,
        }}
        user={selectedUser}
      />
    </ScreenView>
  );
};

export default connect(
  (state: RootState) => {
    return {
      users: getFilteredUsers(state),
      offset: state.users.offset,
      filters: state.users.filters,
    };
  },
  (dispatch) => ({
    getUsers: () => dispatch(fetchUsers()),
    filterUsers: (filterParams: ISearchFilters) => dispatch(getSearchResults(filterParams)),
    removeUser: (id: string) => dispatch(deleteUser(id)),
    getNextBatch: (offset: string) => dispatch(incrementOffset(offset)),
  })
)(Home);
