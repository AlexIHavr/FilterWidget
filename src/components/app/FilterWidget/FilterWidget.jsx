import classNames from 'classnames';
import { useState } from 'react';
import { connect } from 'react-redux';
import {
  setMatchValues,
  setSelectedAllValues,
  toggleAlphabetSort,
  toggleSelectedContext,
  toggleSelectedDimension,
  toggleSelectedValue,
} from '../../../redux/FilterWidget/actions';
import Filter from './Filter/Filter';
import './filterWidget.scss';
import Results from './Results/Results';
import Search from './Search/Search';

const FilterWidget = ({
  state,
  toggleAlphabetSort,
  toggleSelectedContext,
  toggleSelectedDimension,
  toggleSelectedValue,
  setSelectedAllValues,
  setMatchValues,
}) => {
  const [activeFilterWidget, toggleFilterWidget] = useState(false);

  return (
    <div className="filterWidgetWrapper card blue">
      <a
        className="filterWidgetBtn btn-floating btn-large waves-effect waves-light blue darken-4"
        onClick={() => {
          toggleFilterWidget(!activeFilterWidget);
        }}
      >
        <i className="material-icons">filter_list</i>
      </a>
      <div
        className={classNames('filterWidget card', {
          active: activeFilterWidget,
        })}
      >
        <div className="filterHeader row">
          <div className="col">
            <i className="material-icons grey-text">filter_list</i>
          </div>
          <div className="col filterName">
            <span>FILTERS</span>
          </div>
        </div>
        <Filter
          name="context"
          filters={state.filters}
          toggleSelectedFilter={toggleSelectedContext}
        ></Filter>
        <Filter
          name="dimension"
          filters={state.filters.filter(({ context: { selected } }) => selected)}
          toggleSelectedFilter={toggleSelectedDimension}
        ></Filter>
        <Search
          state={state}
          toggleAlphabetSort={toggleAlphabetSort}
          setMatchValues={setMatchValues}
        />
        <Results
          state={state}
          toggleSelectedValue={toggleSelectedValue}
          setSelectedAllValues={setSelectedAllValues}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ filterWidget }) => ({ state: filterWidget });
const mapDispatchToProps = {
  toggleAlphabetSort,
  toggleSelectedContext,
  toggleSelectedDimension,
  toggleSelectedValue,
  setSelectedAllValues,
  setMatchValues,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterWidget);
