import classNames from 'classnames';
import { useState } from 'react';

const Filter = ({ name }) => {
  const [activeFilter, toggleFilter] = useState(false);

  return (
    <div className={classNames(name, 'row')}>
      <div
        className={classNames('col clickable arrowFilter', { rotate: activeFilter })}
        onClick={() => toggleFilter(!activeFilter)}
      >
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
      <div className="col filterName">
        <span>{name.toUpperCase()}</span>
      </div>
      <div className="selectedFilter col">
        <span>Lorem, ipsum dolor.</span>
      </div>
      <div className={classNames('innerFilter col', { active: activeFilter })}>
        <div className="row">
          <div className="col clickable">
            <div className="selectedResult"></div>
          </div>
          <div className="col filterName">
            <span className="showAll">hello</span>
          </div>
        </div>
        <div className="row">
          <div className="col clickable">
            <div className="selectedResult"></div>
          </div>
          <div className="col filterName">
            <span className="showAll">hello</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
