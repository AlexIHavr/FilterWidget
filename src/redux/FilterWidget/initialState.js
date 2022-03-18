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
        context: {
          name: parameter,
          selected: false,
        },
        dimension: {
          name: dimension,
          selected: false,
        },
        value: {
          name: dimensions[dimension],
          selected: false,
          match: true,
        },
      });
    }
  }
});

export default {
  filters,
  alphabetSort: false,
  searchType: EXACT,
  searchString: '',
};
