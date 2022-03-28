export const SELECTED_CONTEXTS = 'selectedContexts';
export const SELECTED_DIMENSIONS = 'selectedDimensions';
export const SELECTED_VALUES = 'selectedValues';

export const SEARCH_TYPES = {
  exact: 'exact',
  partial: 'partial',
  startsWith: 'startsWith',
};

export const SEARCH_TYPES_OPTIONS = [
  {
    type: SEARCH_TYPES.exact,
    symbol: '..',
  },
  {
    type: SEARCH_TYPES.partial,
    symbol: '.',
  },
  {
    type: SEARCH_TYPES.startsWith,
    symbol: '._',
  },
];

const FILTER_TYPES_NAMES = {
  context: 'context',
  dimension: 'dimension',
  value: 'value',
};

export const FILTER_TYPES = {
  [FILTER_TYPES_NAMES.context]: {
    name: FILTER_TYPES_NAMES.context,
    selected: SELECTED_CONTEXTS,
  },
  [FILTER_TYPES_NAMES.dimension]: {
    name: FILTER_TYPES_NAMES.dimension,
    selected: SELECTED_DIMENSIONS,
    parent: FILTER_TYPES_NAMES.context,
  },
  [FILTER_TYPES_NAMES.value]: {
    name: FILTER_TYPES_NAMES.value,
    selected: SELECTED_VALUES,
  },
};
