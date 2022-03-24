import { setMatchValues } from '../redux/filterWidget/actions';
import { SEARCH_TYPES, SELECTED_DIMENSIONS } from '../redux/filterWidget/constants';
import store from '../redux/store';

export const getUniqueFilters = (filters, filterType) => {
  if (!filters.length) return filters;

  const { name, parent } = filterType;

  return filters.reduce(
    (uniques, filter) =>
      !uniques.some(
        (unique) =>
          unique[name] === filter[name] && (parent ? unique[parent] === filter[parent] : !parent)
      )
        ? [...uniques, filter]
        : uniques,
    []
  );
};

export const getAlphabetSortedFilters = (filters) => {
  return [...filters].sort((value, nextValue) => {
    if (value.value < nextValue.value) return -1;

    if (value.value > nextValue.value) return 1;

    return 0;
  });
};

export const filterBySearchType = () => {
  const { dispatch, getState } = store;

  const {
    filters,
    searchString,
    searchType,
    [SELECTED_DIMENSIONS]: selectedDimensions,
  } = getState().filterWidget;

  const filtersValues = filters.filter((filter) =>
    selectedDimensions.some(
      ({ context, dimension }) => context === filter.context && dimension === filter.dimension
    )
  );

  if (!searchString) return dispatch(setMatchValues(filtersValues));

  switch (searchType) {
    default:
    case SEARCH_TYPES.exact:
      dispatch(setMatchValues(filtersValues.filter(({ value }) => String(value) === searchString)));
      break;
    case SEARCH_TYPES.partial:
      dispatch(
        setMatchValues(filtersValues.filter(({ value }) => String(value).includes(searchString)))
      );
      break;
    case SEARCH_TYPES.startsWith:
      dispatch(
        setMatchValues(filtersValues.filter(({ value }) => String(value).startsWith(searchString)))
      );
      break;
  }
};
