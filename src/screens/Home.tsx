import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
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
import {
  deleteUserAction,
  fetchUsersAction,
  filterUsersAction,
  incrementOffsetAction,
  startIncrementOffset,
} from '../actions/users';
import { REMOVE_MODAL_MESSAGE } from '../utils/messages';

interface IHomeProps {
  users: IUser[];
  offset: number;
  isLoading: boolean;
  getUsers: () => void;
  filters: ISearchFilters;
  filterUsers: (searchParams: ISearchFilters) => void;
  removeUser: (id: string) => void;
  getNextBatch: (offset: number) => void;
  startUpdating: () => void;
}

const LIST_ITEMS_PER_ROW = 2;
const END_REACHED_THRESHOLD = 0.001;

const Home = ({
  users,
  offset,
  getNextBatch,
  getUsers,
  startUpdating,
  filters,
  filterUsers,
  removeUser,
  isLoading,
}: IHomeProps) => {
  const listRef = useRef<FlatList<IUser>>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<IUser | undefined>();
  const keyExtractor = useCallback((item) => item.id, []);
  const onEndReached = useCallback(() => getNextBatch(offset + 1), [getNextBatch, offset]);
  const onRefresh = useCallback(() => {
    startUpdating();
    getNextBatch(1);
  }, [getNextBatch, startUpdating]);
  const onDeleteModalInvoked = useCallback((item: IUser) => {
    setSelectedUser(item);
    setModalVisible(true);
  }, []);
  const emptyPlaceholder = useMemo(
    () => <EmptyPlaceholder style={{ height: 300, width: 300, alignSelf: 'center', marginTop: 150 }} />,
    []
  );
  const onDeleteUserPressed = useCallback(() => {
    if (!selectedUser) {
      return;
    }
    removeUser(selectedUser.id);
    setModalVisible(false);
  }, [removeUser, selectedUser]);
  const onDeleteModalRevoked = useCallback(() => {
    setModalVisible(false);
    setSelectedUser(undefined);
  }, []);

  const onFilterChanged = (searchParams: ISearchFilters) => {
    filterUsers(searchParams);
    if (listRef.current) {
      listRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const onSearchAreaClosed = useCallback(() => {
    filterUsers({ ...filters, name: '' });
  }, [filterUsers, filters]);

  const renderUserView = ({ item }: ListRenderItemInfo<IUser>) => (
    <UserCard user={item} onDeletePressed={onDeleteModalInvoked} />
  );

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (!users) {
    return <ActivityIndicator />;
  }

  return (
    <ScreenView navigationMenuColor={BACKGROUND_COLOR} statusBarColor={'#4E3976'}>
      <FilterHeader filters={filters} onFilterValuesChanged={onFilterChanged} onSearchAreaClosed={onSearchAreaClosed} />
      <FlatList
        ref={listRef}
        keyExtractor={keyExtractor}
        numColumns={LIST_ITEMS_PER_ROW}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl tintColor={MAIN_COLOR} colors={[MAIN_COLOR]} onRefresh={onRefresh} refreshing={isLoading} />
        }
        ListEmptyComponent={emptyPlaceholder}
        data={users}
        style={HomeStyles.listContainer}
        contentContainerStyle={HomeStyles.listContent}
        renderItem={renderUserView}
        onEndReached={onEndReached}
        onEndReachedThreshold={END_REACHED_THRESHOLD}
      />
      <Popup
        isVisible={modalVisible}
        message={REMOVE_MODAL_MESSAGE}
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
      isLoading: state.users.isPending,
    };
  },
  (dispatch) => ({
    getUsers: () => dispatch(fetchUsersAction()),
    filterUsers: (filterParams: ISearchFilters) => dispatch(filterUsersAction(filterParams)),
    removeUser: (id: string) => dispatch(deleteUserAction(id)),
    getNextBatch: (offset: number) => dispatch(incrementOffsetAction(offset)),
    startUpdating: () => dispatch(startIncrementOffset()),
  })
)(Home);
