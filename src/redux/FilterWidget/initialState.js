import { EXACT } from '../../components/app/FilterWidget/Search/constants';
import cars from '../../data/cars';

// [
//   {
//     context: { name: 'engine', selected: false },
//     dimension: { name: 'volume', selected: false },
//     value: { name: 3, selected: false },
//   },
//   {
//     context: { name: 'engine', selected: false },
//     dimension: { name: 'volume', selected: false },
//     value: { name: 2, selected: false },
//   },
// ];

const filters = [
  {
    context: 'engine',
    dimensions: [
      {
        dimension: 'weight',
        values: [
          {
            value: 10,
            selected: false,
          },
          {
            value: 25,
            selected: false,
          },
        ],
        selected: false,
      },
      {
        dimension: 'volume',
        values: [
          {
            value: 3,
            selected: false,
          },
          {
            value: 2,
            selected: false,
          },
        ],
        selected: false,
      },
      {
        dimension: 'power',
        values: [
          {
            value: 230,
            selected: false,
          },
          {
            value: 500,
            selected: false,
          },
        ],
        selected: false,
      },
    ],
    selected: false,
  },
  {
    context: 'transmission',
    dimensions: [
      {
        dimension: 'maxSpeed',
        values: [
          {
            value: 250,
            selected: false,
          },
          {
            value: 350,
            selected: false,
          },
        ],
        selected: false,
      },
      {
        dimension: 'gears',
        values: [
          {
            value: 5,
            selected: false,
          },
        ],
        selected: false,
      },
      {
        dimension: 'type',
        values: [
          {
            value: 'manual',
            selected: false,
          },
          {
            value: 'auto',
            selected: false,
          },
        ],
        selected: false,
      },
    ],
    selected: false,
  },
];

// for (let context in cars) {
//   filters.push({
//     context,
//     dimensions: [],
//     selected: false,
//   });
// }

export default {
  filters,
  alphabetSort: false,
  searchType: EXACT,
  results: [],
};
