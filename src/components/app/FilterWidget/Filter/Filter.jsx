import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { filterBySearchType, getUniqueFilters } from '../../../../helpers/filterHelpers';

import './filter.scss';
import { useDispatch } from 'react-redux';

const Filter = ({ name, filters, toggleSelectedFilter }) => {
  const dispatch = useDispatch();

  const [activeFilter, toggleFilter] = useState(false);

  const uniqueFilters = getUniqueFilters(filters, name);

  const onFilterChanged = useCallback(
    (filter) => {
      dispatch(
        toggleSelectedFilter({
          context: filter.context.name,
          dimension: filter.dimension.name,
        })
      );
      filterBySearchType();
    },
    [toggleSelectedFilter, filterBySearchType]
  );

  return (
    <div className={classNames(name, 'row')}>
      <div
        className={classNames('col clickable arrowFilter', {
          rotate: activeFilter,
        })}
        onClick={() => uniqueFilters.length && toggleFilter(!activeFilter)}
      >
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
      <div className="col filterName">
        <span>{name.toUpperCase() + 'S'}</span>
      </div>
      <div className="selectedFilter col">
        <span>
          {uniqueFilters
            .filter((filter) => filter[name].selected)
            .map((filter) => filter[name].name)
            .join(', ')}
        </span>
      </div>
      <div className={classNames('innerFilter col', { active: activeFilter })}>
        {uniqueFilters.map((filter) => (
          <div key={filter.id} className="row">
            <div className="col clickable">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  onChange={() => onFilterChanged(filter)}
                  checked={filter[name].selected}
                />
                <span>{filter[name].name}</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Filter);
