import classNames from 'classnames';
import { useState } from 'react';

const Filter = ({ name, filters, toggleSelectedFilter }) => {
  const [activeFilter, toggleFilter] = useState(false);

  return (
    <div className={classNames(name, 'row')}>
      <div
        className={classNames('col clickable arrowFilter', {
          rotate: activeFilter,
        })}
        onClick={() => filters.length && toggleFilter(!activeFilter)}
      >
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
      <div className="col filterName">
        <span>{name.toUpperCase() + 'S'}</span>
      </div>
      <div className="selectedFilter col">
        <span>
          {filters
            .filter(({ selected }) => selected)
            .map((filter) => filter[name])
            .join(', ')}
        </span>
      </div>
      <div className={classNames('innerFilter col', { active: activeFilter })}>
        {filters.map((filter) => (
          <div key={filter[name]} className="row">
            <div className="col clickable">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  onChange={() =>
                    toggleSelectedFilter({ context: filter.context, dimension: filter.dimension })
                  }
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

export default Filter;
