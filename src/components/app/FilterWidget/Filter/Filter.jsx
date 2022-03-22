import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { filterBySearchType, getUniqueFilters } from '../../../../helpers/filterHelpers';

import './filter.scss';
import { useDispatch } from 'react-redux';
import { toggleSelectedFilter } from '../../../../redux/FilterWidget/actions';
import { useFilterWidget } from '../../../../helpers/customHooks';

const Filter = ({ parentName, name, filters }) => {
  const selectedFiltersName = `selected${name[0].toUpperCase()}${name.slice(1)}s`;
  const selectedFilters = useFilterWidget()[selectedFiltersName];
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState(false);

  const uniqueFilters = getUniqueFilters(filters, name, parentName);

  const onFilterChanged = useCallback(
    (id) => {
      dispatch(toggleSelectedFilter({ id, selectedFiltersName }));
      filterBySearchType();
    },
    [toggleSelectedFilter, filterBySearchType]
  );

  const setActiveFilterOnClick = useCallback(
    () => uniqueFilters.length && setActiveFilter(!activeFilter),
    [uniqueFilters, activeFilter]
  );

  const getUniqueSelectedFiltersString = () => {
    return selectedFilters
      .filter((filter) => uniqueFilters.some(({ id }) => id === filter.id))
      .map((filter) => filter[name])
      .join(', ');
  };

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
        onClick={setActiveFilterOnClick}
      >
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
      <div className="col filterName">
        <span>{name.toUpperCase() + 'S'}</span>
      </div>
      <div className="selectedFilter col">
        <span>{getUniqueSelectedFiltersString()}</span>
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
                  onChange={() => onFilterChanged(filter.id)}
                  checked={selectedFilters.some(({ id }) => id === filter.id)}
                />
                <span>
                  {filter[name]} {filter[name] !== filter.context ? `(${filter.context})` : ''}
                </span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Filter);
