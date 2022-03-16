import initialState from './initialState';
import {
  SET_MATCH_VALUES,
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

    case TOGGLE_SELECTED_CONTEXT:
      const selectedContext = state.filters.map((filter) =>
        filter.context.name === action.payload.context
          ? { ...filter, context: { ...filter.context, selected: !filter.context.selected } }
          : filter
      );

      return {
        ...state,
        filters: selectedContext,
      };

    case TOGGLE_SELECTED_DIMENSION:
      const selectedDimension = state.filters.map((filter) =>
        filter.context.name === action.payload.context &&
        filter.dimension.name === action.payload.dimension
          ? { ...filter, dimension: { ...filter.dimension, selected: !filter.dimension.selected } }
          : filter
      );

      return {
        ...state,
        filters: selectedDimension,
      };

    case TOGGLE_SELECTED_VALUE:
      const selectedValue = state.filters.map((filter) =>
        filter.context.name === action.payload.context &&
        filter.dimension.name === action.payload.dimension &&
        filter.value.name === action.payload.value
          ? { ...filter, value: { ...filter.value, selected: !filter.value.selected } }
          : filter
      );
      return {
        ...state,
        filters: selectedValue,
      };

    case SET_SELECTED_ALL_VALUES:
      const selectedAllValues = state.filters.map((filter) =>
        filter.context.selected && filter.dimension.selected
          ? { ...filter, value: { ...filter.value, selected: action.payload } }
          : filter
      );

      return {
        ...state,
        filters: selectedAllValues,
      };

    case SET_MATCH_VALUES:
      const matchValues = state.filters.map((filter) =>
        action.payload.some(({ id }) => id === filter.id)
          ? {
              ...filter,
              value: { ...filter.value, match: true },
            }
          : {
              ...filter,
              value: { ...filter.value, match: false },
            }
      );

      return {
        ...state,
        filters: matchValues,
      };

    default:
      return state;
  }
};

export default filterWidgetReducer;
