import { v4 } from 'uuid';
import cars from '../../data/cars';

let filters = [];

cars.forEach(({ contexts, ...properties }) => {
  for (let context in contexts) {
    const dimensions = contexts[context];

    for (let dimension in dimensions) {
      filters.push({
        id: v4(),
        ...properties,
        context: {
          name: context,
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
};
