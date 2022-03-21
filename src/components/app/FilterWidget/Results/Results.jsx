import React from 'react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getUniqueFilters, getVisibleMatchedValues } from '../../../../helpers/filterHelpers';

import './results.scss';
import { useDispatch } from 'react-redux';
import { setSelectedAllValues, toggleSelectedFilter } from '../../../../redux/FilterWidget/actions';
import { useFilterWidget } from '../../../../helpers/customHooks';

const Results = () => {
  const dispatch = useDispatch();

  const { selectedValues, alphabetSort } = useFilterWidget();

  const [selectAll, setSelectAll] = useState(false);

  let uniqueMatchedValues = getUniqueFilters(getVisibleMatchedValues(), 'value');

  if (alphabetSort) {
    uniqueMatchedValues = uniqueMatchedValues.sort((value, nextValue) => {
      if (value.value < nextValue.value) return -1;

      if (value.value > nextValue.value) return 1;

      return 0;
    });
  }

  useEffect(() => {
    if (uniqueMatchedValues.length) dispatch(setSelectedAllValues(selectAll));
  }, [selectAll]);

  return (
    <div className={classNames('results row', { active: uniqueMatchedValues.length })}>
      <div className="row">
        <div className="col clickable">
          <label>
            <input
              type="checkbox"
              className="filled-in"
              onChange={() => setSelectAll(!selectAll)}
            />
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
                onChange={() =>
                  dispatch(
                    toggleSelectedFilter({
                      filterName: 'value',
                      selectedFiltersName: 'selectedValues',
                      filterValue: value,
                    })
                  )
                }
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
