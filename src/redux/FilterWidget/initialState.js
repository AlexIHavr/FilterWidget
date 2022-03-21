import { v4 } from 'uuid';
import { EXACT } from '../../components/app/FilterWidget/Search/constants';
import cars from '../../data/cars';

let filters = [];

cars.forEach(({ parameters, ...properties }) => {
  for (let parameter in parameters) {
    const dimensions = parameters[parameter];

    for (let dimension in dimensions) {
      filters.push({
        id: v4(),
        ...properties,
        context: parameter,
        dimension: dimension,
        value: dimensions[dimension],
      });
    }
  }
});

export default {
  filters,
  selectedContexts: [],
  selectedDimensions: [],
  selectedValues: [],
  matchedValues: [],
  alphabetSort: false,
  searchType: EXACT,
  searchString: '',
};
