import { v4 } from 'uuid';
import cars from '../../data/cars';
import {
  FILTER_TYPES,
  SEARCH_TYPES,
  SELECTED_CONTEXTS,
  SELECTED_DIMENSIONS,
  SELECTED_VALUES,
} from './constants';

let filters = [];

cars.forEach(({ parameters }) => {
  for (let parameter in parameters) {
    const dimensions = parameters[parameter];

    for (let dimension in dimensions) {
      filters.push({
        id: v4(),
        [FILTER_TYPES.context.name]: parameter,
        [FILTER_TYPES.dimension.name]: dimension,
        [FILTER_TYPES.value.name]: dimensions[dimension],
      });
    }
  }
});

export default {
  filters,
  cars,
  [SELECTED_CONTEXTS]: [],
  [SELECTED_DIMENSIONS]: [],
  [SELECTED_VALUES]: [],
  matchedValues: [],
  alphabetSort: false,
  searchType: SEARCH_TYPES.exact,
  searchString: '',
};
