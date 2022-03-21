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
      const { filterName, filterValue, selectedFiltersName } = action.payload;

      const selectedFilters = !state[selectedFiltersName].some(
        (filter) => filter[filterName] === filterValue
      )
        ? [
            ...state[selectedFiltersName],
            ...state.filters.filter((filter) => filter[filterName] === filterValue),
          ]
        : state[selectedFiltersName].filter((filter) => filter[filterName] !== filterValue);

      return {
        ...state,
        [selectedFiltersName]: selectedFilters,
      };

    case SET_SELECTED_ALL_VALUES:
      return {
        ...state,
        selectedValues: action.payload ? [...state.selectedDimensions] : [],
      };

    case SET_MATCH_VALUES:
      return {
        ...state,
        matchedValues: action.payload,
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
