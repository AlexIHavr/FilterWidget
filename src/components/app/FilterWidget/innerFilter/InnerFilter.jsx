import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFilterWidget } from '../../../../helpers/customHooks';
import { filterBySearchType } from '../../../../helpers/filterHelpers';
import {
  setSelectedAllFilters,
  toggleSelectedFilter,
} from '../../../../redux/filterWidget/actions';
import { FILTER_TYPES } from '../../../../redux/filterWidget/constants';
import './innerFilter.scss';

const InnerFilter = ({ filters, filterType: { name, selected }, activeFilter = true }) => {
  const { [selected]: selectedFilters } = useFilterWidget();
  const dispatch = useDispatch();

  const [selectAll, setSelectAll] = useState(false);

  const setSelectAllOnChange = useCallback(() => {
    dispatch(setSelectedAllFilters({ filters, selected, selectAll: !selectAll }));
    setSelectAll(!selectAll);
    filterBySearchType();
  }, [dispatch, selectAll, filters, selected]);

  const toggleSelectedFilterOnChange = useCallback(
    (id) => {
      dispatch(toggleSelectedFilter({ id, selected }));
      filterBySearchType();
    },
    [dispatch, selected]
  );

  const getFilterPath = useCallback(
    ({ context, dimension }) => {
      switch (name) {
        case FILTER_TYPES.dimension.name:
          return `(${context})`;
        case FILTER_TYPES.value.name:
          return `(${context} - ${dimension})`;
        default:
          return '';
      }
    },
    [name]
  );

  return (
    <div
      className={classNames('row innerFilter', `${name}InnerFilter`, {
        active: activeFilter && filters.length,
      })}
    >
      <div className="row">
        <div className="col clickable">
          <label>
            <input type="checkbox" className="filled-in" onChange={setSelectAllOnChange} />
            <span className="selectAll">(All)</span>
          </label>
        </div>
      </div>

      {filters.map((filter) => (
        <div key={filter.id} className="row">
          <div className="col clickable">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                onChange={() => toggleSelectedFilterOnChange(filter.id)}
                checked={selectedFilters.some(({ id }) => id === filter.id)}
              />
              <span>
                {filter[name]} {getFilterPath(filter)}
              </span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InnerFilter;
