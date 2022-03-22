import { EXACT, PARTIAL, STARTS_WITH } from '../components/app/FilterWidget/Search/constants';
import { setMatchValues } from '../redux/FilterWidget/actions';
import store from '../redux/store';

export const getUniqueFilters = (filters, filterName) => {
  if (!filters.length) return filters;

  return filters.reduce((uniques, filter) => {
    if (!uniques.length || uniques.every((unique) => unique[filterName] !== filter[filterName]))
      uniques.push(filter);

    return uniques;
  }, []);
};

export const getAlphabetSortedFilters = (filters) => {
  return filters.sort((value, nextValue) => {
    if (value.value < nextValue.value) return -1;

    if (value.value > nextValue.value) return 1;

    return 0;
  });
};

export const getVisibleMatchedValues = () => {
  const { matchedValues, selectedContexts, selectedDimensions } = store.getState().filterWidget;

  return matchedValues.filter(
    (filter) =>
      selectedContexts.some(({ id }) => filter.id === id) &&
      selectedDimensions.some(({ id }) => filter.id === id)
  );
};

export const filterBySearchType = () => {
  const { dispatch, getState } = store;

  const { searchString, searchType, selectedDimensions } = getState().filterWidget;

  if (!selectedDimensions.length) return;

  if (!searchString) return dispatch(setMatchValues(selectedDimensions));

  switch (searchType) {
    default:
    case EXACT:
      dispatch(
        setMatchValues(selectedDimensions.filter(({ value }) => String(value) === searchString))
      );
      break;
    case PARTIAL:
      dispatch(
        setMatchValues(
          selectedDimensions.filter(({ value }) => String(value).includes(searchString))
        )
      );
      break;
    case STARTS_WITH:
      dispatch(
        setMatchValues(
          selectedDimensions.filter(({ value }) => String(value).startsWith(searchString))
        )
      );
      break;
  }
};
