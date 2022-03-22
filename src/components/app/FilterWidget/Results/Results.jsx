import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import {
  getAlphabetSortedFilters,
  getUniqueFilters,
  getVisibleMatchedValues,
} from '../../../../helpers/filterHelpers';

import './results.scss';
import { useDispatch } from 'react-redux';
import { setSelectedAllValues, toggleSelectedFilter } from '../../../../redux/FilterWidget/actions';
import { useFilterWidget } from '../../../../helpers/customHooks';

const Results = () => {
  const dispatch = useDispatch();

  const { selectedValues, alphabetSort } = useFilterWidget();

  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectedFilterOnChange = useCallback(
    (value) =>
      dispatch(
        toggleSelectedFilter({
          filterName: 'value',
          selectedFiltersName: 'selectedValues',
          filterValue: value,
        })
      ),
    [toggleSelectedFilter]
  );

  const setSelectAllOnChange = useCallback(() => {
    dispatch(setSelectedAllValues(!selectAll));
    setSelectAll(!selectAll);
  }, [setSelectedAllValues, selectAll]);

  let uniqueMatchedValues = getUniqueFilters(getVisibleMatchedValues(), 'value');

  if (alphabetSort) uniqueMatchedValues = getAlphabetSortedFilters(uniqueMatchedValues);

  return (
    <div className={classNames('results row', { active: uniqueMatchedValues.length })}>
      <div className="row">
        <div className="col clickable">
          <label>
            <input type="checkbox" className="filled-in" onChange={setSelectAllOnChange} />
            <span className="showAll">(All)</span>
          </label>
        </div>
      </div>

      {uniqueMatchedValues.map(({ id, value }) => (
        <div key={id} className="row">
          <div className="col clickable">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                onChange={() => toggleSelectedFilterOnChange(value)}
                checked={selectedValues.some((filter) => id === filter.id)}
              />
              <span>{value}</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Results);
