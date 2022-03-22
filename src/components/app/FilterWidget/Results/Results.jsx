import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { getAlphabetSortedFilters } from '../../../../helpers/filterHelpers';

import './results.scss';
import { useDispatch } from 'react-redux';
import { setSelectedAllValues, toggleSelectedFilter } from '../../../../redux/FilterWidget/actions';
import { useFilterWidget } from '../../../../helpers/customHooks';

const Results = () => {
  const dispatch = useDispatch();

  const { selectedValues, alphabetSort, matchedValues } = useFilterWidget();

  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectedFilterOnChange = useCallback(
    (id) =>
      dispatch(
        toggleSelectedFilter({
          id,
          selectedFiltersName: 'selectedValues',
        })
      ),
    [toggleSelectedFilter]
  );

  const setSelectAllOnChange = useCallback(() => {
    dispatch(setSelectedAllValues(!selectAll));
    setSelectAll(!selectAll);
  }, [setSelectedAllValues, selectAll]);

  return (
    <div className={classNames('results row', { active: matchedValues.length })}>
      <div className="row">
        <div className="col clickable">
          <label>
            <input type="checkbox" className="filled-in" onChange={setSelectAllOnChange} />
            <span className="showAll">(All)</span>
          </label>
        </div>
      </div>

      {(alphabetSort ? getAlphabetSortedFilters(matchedValues) : matchedValues).map(
        ({ id, context, dimension, value }) => (
          <div key={id} className="row">
            <div className="col clickable">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  onChange={() => toggleSelectedFilterOnChange(id)}
                  checked={selectedValues.some((filter) => id === filter.id)}
                />
                <span>
                  {value} ({context} - {dimension})
                </span>
              </label>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default React.memo(Results);
