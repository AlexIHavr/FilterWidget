import { EXACT, PARTIAL, STARTS_WITH } from '../components/app/FilterWidget/Search/constants';
import { setMatchValues } from '../redux/FilterWidget/actions';
import store from '../redux/store';

export const getUniqueFilters = (filters, filterName, extraFilterName) => {
  if (!filters.length) return filters;

  return filters.reduce((uniques, filter) => {
    if (
      !extraFilterName
        ? !uniques.some((unique) => unique[filterName] === filter[filterName])
        : !uniques.some(
            (unique) =>
              unique[filterName] === filter[filterName] &&
              unique[extraFilterName] === filter[extraFilterName]
          )
    )
      uniques.push(filter);

    return uniques;
  }, []);
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

  const { filters, searchString, searchType, selectedDimensions } = getState().filterWidget;

  const filtersValues = filters.filter((filter) =>
    selectedDimensions.some(
      ({ context, dimension }) => context === filter.context && dimension === filter.dimension
    )
  );

  if (!searchString) return dispatch(setMatchValues(filtersValues));

  switch (searchType) {
    default:
    case EXACT:
      dispatch(setMatchValues(filtersValues.filter(({ value }) => String(value) === searchString)));
      break;
    case PARTIAL:
      dispatch(
        setMatchValues(filtersValues.filter(({ value }) => String(value).includes(searchString)))
      );
      break;
    case STARTS_WITH:
      dispatch(
        setMatchValues(filtersValues.filter(({ value }) => String(value).startsWith(searchString)))
      );
      break;
  }
};
