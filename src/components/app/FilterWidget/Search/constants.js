export const EXACT = 'exact';
export const PARTIAL = 'partial';
export const STARTS_WITH = 'startsWith';

export const SEARCH_TYPES = [
  {
    type: EXACT,
    symbol: '..',
  },
  {
    type: PARTIAL,
    symbol: '.',
  },
  {
    type: STARTS_WITH,
    symbol: '._',
  },
];
