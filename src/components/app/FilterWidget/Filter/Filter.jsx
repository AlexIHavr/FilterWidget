import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { filterBySearchType, getUniqueFilters } from '../../../../helpers/filterHelpers';

import './filter.scss';
import { useDispatch } from 'react-redux';
import { toggleSelectedFilter } from '../../../../redux/FilterWidget/actions';
import { useFilterWidget } from '../../../../helpers/customHooks';

const Filter = ({ name, filters, selectedFiltersName }) => {
  const selectedFilters = useFilterWidget()[selectedFiltersName];
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState(false);

  const uniqueFilters = getUniqueFilters(filters, name);
  const uniqueSelectedFilters = getUniqueFilters(selectedFilters, name);

  const onFilterChanged = useCallback(
    (filterValue) => {
      dispatch(
        toggleSelectedFilter({
          filterName: name,
          selectedFiltersName,
          filterValue,
        })
      );
      filterBySearchType();
    },
    [toggleSelectedFilter, filterBySearchType]
  );

  useEffect(() => {
    window.onclick = (e) => {
      if (activeFilter && !e.path.some((elem) => elem.classList?.contains(name)))
        setActiveFilter(false);
    };
  }, [activeFilter]);

  return (
    <div className={classNames(name, 'row')}>
      <div
        className={classNames('col clickable arrowFilter', {
          rotate: activeFilter && uniqueFilters.length,
        })}
        onClick={() => uniqueFilters.length && setActiveFilter(!activeFilter)}
      >
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
      <div className="col filterName">
        <span>{name.toUpperCase() + 'S'}</span>
      </div>
      <div className="selectedFilter col">
        <span>
          {uniqueSelectedFilters
            .filter((filter) => uniqueFilters.some(({ id }) => id === filter.id))
            .map((filter) => filter[name])
            .join(', ')}
        </span>
      </div>
      <div
        className={classNames('innerFilter col', { active: activeFilter && uniqueFilters.length })}
      >
        {uniqueFilters.map((filter) => (
          <div key={filter.id} className="row">
            <div className="col clickable">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  onChange={() => onFilterChanged(filter[name])}
                  checked={selectedFilters.some(({ id }) => id === filter.id)}
                />
                <span>{filter[name]}</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Filter);
