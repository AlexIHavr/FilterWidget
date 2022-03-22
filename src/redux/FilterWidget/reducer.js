import initialState from './initialState';
import {
  SET_MATCH_VALUES,
  SET_SEARCH_STRING,
  SET_SEARCH_TYPE,
  SET_SELECTED_ALL_VALUES,
  TOGGLE_ALPHABET_SORT,
  TOGGLE_SELECTED_FILTER,
} from './types';

const filterWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALPHABET_SORT:
      return { ...state, alphabetSort: !state.alphabetSort };

    case TOGGLE_SELECTED_FILTER:
      const { id, selectedFiltersName } = action.payload;

      const selectedFilters = !state[selectedFiltersName].some((filter) => filter.id === id)
        ? [...state[selectedFiltersName], ...state.filters.filter((filter) => filter.id === id)]
        : state[selectedFiltersName].filter((filter) => filter.id !== id);

      return {
        ...state,
        [selectedFiltersName]: selectedFilters,
      };

    case SET_SELECTED_ALL_VALUES:
      const selectedAllValues = state.filters.filter((filter) =>
        state.matchedValues.some(({ id }) => id === filter.id)
      );

      return {
        ...state,
        selectedValues: action.payload ? selectedAllValues : [],
      };

    case SET_MATCH_VALUES:
      const matchedValues = action.payload.reduce(
        (filters, filter) =>
          state.selectedContexts.some(({ context }) => context === filter.context) &&
          (!filters.length || !filters.some(({ value }) => value === filter.value))
            ? [...filters, filter]
            : filters,
        []
      );

      return {
        ...state,
        matchedValues,
      };

    case SET_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload,
      };

    case SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload,
      };

    default:
      return state;
  }
};

export default filterWidgetReducer;
