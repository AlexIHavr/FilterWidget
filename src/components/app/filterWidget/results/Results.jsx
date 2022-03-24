import React from 'react';
import { getAlphabetSortedFilters } from '../../../../helpers/filterHelpers';
import { useFilterWidget } from '../../../../helpers/customHooks';
import { FILTER_TYPES } from '../../../../redux/filterWidget/constants';
import InnerFilter from '../innerFilter/InnerFilter';

const Results = () => {
  const { alphabetSort, matchedValues } = useFilterWidget();

  return (
    <InnerFilter
      filters={alphabetSort ? getAlphabetSortedFilters(matchedValues) : matchedValues}
      filterType={FILTER_TYPES.value}
    />
  );
};

export default React.memo(Results);
