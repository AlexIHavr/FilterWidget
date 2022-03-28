import { SELECTED_CONTEXTS } from './constants';
import initialState from './initialState';
import {
  SET_MATCH_VALUES,
  SET_SEARCH_STRING,
  SET_SEARCH_TYPE,
  SET_SELECTED_ALL_FILTERS,
  TOGGLE_ALPHABET_SORT,
  TOGGLE_SELECTED_FILTER,
} from './types';

const filterWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALPHABET_SORT:
      return { ...state, alphabetSort: !state.alphabetSort };

    case TOGGLE_SELECTED_FILTER:
      const { id, selected } = action.payload;

      const selectedFilters = !state[selected].some((filter) => filter.id === id)
        ? [...state[selected], ...state.filters.filter((filter) => filter.id === id)]
        : state[selected].filter((filter) => filter.id !== id);

      return {
        ...state,
        [selected]: selectedFilters,
      };

    case SET_SELECTED_ALL_FILTERS:
      return {
        ...state,
        [action.payload.selected]: action.payload.selectAll ? action.payload.filters : [],
      };

    case SET_MATCH_VALUES:
      const matchedValues = action.payload.reduce(
        (filters, filter) =>
          state[SELECTED_CONTEXTS].some(({ context }) => context === filter.context) &&
          (!filters.length ||
            !filters.some(
              ({ context, dimension, value }) =>
                context === filter.context &&
                dimension === filter.dimension &&
                value === filter.value
            ))
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
