import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from '../elements/Text';
import { SearchInput } from './SearchInput';
import { AGE_SORTING_TYPES, ISearchFilters } from '../reducers/types';
import { FilterHeaderStyles } from '../styles/components/FiterHeader';

interface IFilterHeaderProps {
  filters: ISearchFilters;
  onFilterValuesChanged: (value: ISearchFilters) => void;
  onSearchAreaClosed: () => void;
}

export const FilterHeader = ({ filters, onFilterValuesChanged, onSearchAreaClosed }: IFilterHeaderProps) => {
  return (
    <View style={FilterHeaderStyles.container}>
      <Icon name={'ios-flame'} size={50} color={'#fff'} />
      <View style={FilterHeaderStyles.logoContainer}>
        <Text style={FilterHeaderStyles.logoText}>APPFLAME</Text>
      </View>
      <View style={FilterHeaderStyles.inputContainer}>
        <SearchInput
          value={filters.name}
          onClose={onSearchAreaClosed}
          onValueChanged={(name: string) => onFilterValuesChanged({ ...filters, name })}
        />
        <TouchableOpacity
          onPress={() =>
            onFilterValuesChanged({
              ageSortingType:
                filters.ageSortingType === AGE_SORTING_TYPES.ASC ? AGE_SORTING_TYPES.DSC : AGE_SORTING_TYPES.ASC,
            })
          }
          style={FilterHeaderStyles.ageSortButton}
        >
          <Icon
            name={filters.ageSortingType === AGE_SORTING_TYPES.DSC ? 'caret-up' : 'caret-down'}
            size={35}
            color={'#000'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
