import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { getUniqueFilters } from '../../../../helpers/filterHelpers';

import './filter.scss';
import { useFilterWidget } from '../../../../helpers/customHooks';
import InnerFilter from '../innerFilter/InnerFilter';

const Filter = ({ filterType, filters, setSelectedAllFilters }) => {
  const { name, selected } = filterType;
  const { [selected]: selectedFilters } = useFilterWidget();

  const [activeFilter, setActiveFilter] = useState(false);

  const uniqueFilters = getUniqueFilters(filters, filterType);

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
  }, [activeFilter, name]);

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
      <InnerFilter
        filters={uniqueFilters}
        filterType={filterType}
        setSelectedAllFilters={setSelectedAllFilters}
        activeFilter={activeFilter}
      />
    </div>
  );
};

export default React.memo(Filter);
