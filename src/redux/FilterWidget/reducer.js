import initialState from './initialState';
import {
  SET_SEARCH_TYPE,
  SET_SELECTED_ALL_VALUES,
  TOGGLE_ALPHABET_SORT,
  TOGGLE_SELECTED_CONTEXT,
  TOGGLE_SELECTED_DIMENSION,
  TOGGLE_SELECTED_VALUE,
} from './types';

const filterWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALPHABET_SORT:
      return { ...state, alphabetSort: !state.alphabetSort };

    case SET_SEARCH_TYPE:
      return { ...state, searchType: action.payload };

    case TOGGLE_SELECTED_CONTEXT:
      const selectedContext = state.filters.map((filter) =>
        filter.context === action.payload.context
          ? { ...filter, selected: !filter.selected }
          : filter
      );

      return {
        ...state,
        filters: selectedContext,
      };

    case TOGGLE_SELECTED_DIMENSION:
      const selectedDimension = state.filters.map((filter) =>
        filter.context === action.payload.context
          ? {
              ...filter,
              dimensions: filter.dimensions.map((dimension) =>
                dimension.dimension === action.payload.dimension
                  ? { ...dimension, selected: !dimension.selected }
                  : dimension
              ),
            }
          : filter
      );

      return {
        ...state,
        filters: selectedDimension,
      };

    case TOGGLE_SELECTED_VALUE:
      const selectedValue = state.filters.map((filter) =>
        filter.context === action.payload.context
          ? {
              ...filter,
              dimensions: filter.dimensions.map((dimension) =>
                dimension.dimension === action.payload.dimension
                  ? {
                      ...dimension,
                      values: dimension.values.map((value) =>
                        value.value === action.payload.value
                          ? { ...value, selected: !value.selected }
                          : value
                      ),
                    }
                  : dimension
              ),
            }
          : filter
      );

      return {
        ...state,
        filters: selectedValue,
      };

    case SET_SELECTED_ALL_VALUES:
      const selectedAllValues = state.filters.map((filter) =>
        filter.selected
          ? {
              ...filter,
              dimensions: filter.dimensions.map((dimension) =>
                dimension.selected
                  ? {
                      ...dimension,
                      values: dimension.values.map((value) => ({
                        ...value,
                        selected: action.payload,
                      })),
                    }
                  : dimension
              ),
            }
          : filter
      );

      return {
        ...state,
        filters: selectedAllValues,
      };

    default:
      return state;
  }
};

export default filterWidgetReducer;
