import React from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import Filter from './filter/Filter';
import './filterWidget.scss';
import Results from './results/Results';
import Search from './search/Search';
import { useFilterWidget } from '../../../helpers/customHooks';
import { FILTER_TYPES, SELECTED_CONTEXTS } from '../../../redux/filterWidget/constants';

const FilterWidget = () => {
  const { filters, [SELECTED_CONTEXTS]: selectedContexts } = useFilterWidget();

  const [activeFilterWidget, toggleFilterWidget] = useState(false);

  return (
    <div className="filterWidgetWrapper card blue">
      <a
        className="filterWidgetBtn btn-floating btn-large waves-effect waves-light blue darken-4"
        onClick={() => toggleFilterWidget(!activeFilterWidget)}
      >
        <i className="material-icons">filter_list</i>
      </a>
      <div className={classNames('filterWidget card', { active: activeFilterWidget })}>
        <div className="filterHeader row">
          <div className="col">
            <i className="material-icons grey-text">filter_list</i>
          </div>
          <div className="col filterName">
            <span>FILTERS</span>
          </div>
        </div>
        <Filter filterType={FILTER_TYPES.context} filters={filters}></Filter>
        <Filter
          filterType={FILTER_TYPES.dimension}
          filters={filters.filter((filter) =>
            selectedContexts.some(({ context }) => filter.context === context)
          )}
        ></Filter>
        <Search />
        <Results />
      </div>
    </div>
  );
};

export default React.memo(FilterWidget);
