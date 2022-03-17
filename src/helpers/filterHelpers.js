import { EXACT, PARTIAL, STARTS_WITH } from '../components/app/FilterWidget/Search/constants';
import { setMatchValues } from '../redux/FilterWidget/actions';
import store from '../redux/store';

export const getUniqueFilters = (filters, property) => {
  if (!filters.length) return filters;

  return filters.reduce((uniques, filter) => {
    if (
      !uniques.length ||
      uniques.every((unique) =>
        property ? unique[property].name !== filter[property].name : unique.name !== filter.name
      )
    )
      uniques.push(filter);

    return uniques;
  }, []);
};

export const filterBySearchType = () => {
  const state = store.getState().filterWidget;

  const filterValues = state.filters.filter(
    ({ context, dimension }) => context.selected && dimension.selected
  );

  if (!filterValues.length) return;

  if (!state.searchString) return store.dispatch(setMatchValues(filterValues));

  switch (state.searchType) {
    case EXACT:
      store.dispatch(
        setMatchValues(
          filterValues.filter(({ value: { name } }) => String(name) === state.searchString)
        )
      );
      break;
    case PARTIAL:
      store.dispatch(
        setMatchValues(
          filterValues.filter(({ value: { name } }) => String(name).includes(state.searchString))
        )
      );
      break;
    case STARTS_WITH:
      store.dispatch(
        setMatchValues(
          filterValues.filter(({ value: { name } }) => String(name).startsWith(state.searchString))
        )
      );
      break;
  }
};
