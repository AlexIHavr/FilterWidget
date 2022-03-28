import { useSelector } from 'react-redux';

export const useFilterWidget = () => {
  return useSelector(({ filterWidget }) => filterWidget);
};
