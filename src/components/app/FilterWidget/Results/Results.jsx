import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getUniqueFilters } from '../../../../helpers/filterHelpers';

import './results.scss';

const Results = ({ state, toggleSelectedValue, setSelectedAllValues }) => {
  const [selectAll, setSelectAll] = useState(false);

  let uniqueSelectedValues = getUniqueFilters(
    state.filters.filter(({ context, dimension }) => context.selected && dimension.selected),
    'value'
  );

  if (state.alphabetSort) {
    uniqueSelectedValues = uniqueSelectedValues.sort((value, nextValue) => {
      if (value.value.name < nextValue.value.name) return -1;

      if (value.value.name > nextValue.value.name) return 1;

      return 0;
    });
  }

  useEffect(() => {
    if (uniqueSelectedValues.length) setSelectedAllValues(selectAll);
  }, [selectAll]);

  return (
    <div className={classNames('results row', { active: uniqueSelectedValues.length })}>
      <div className="row activeFlex">
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

      {uniqueSelectedValues.map(({ id, value, context, dimension }) => (
        <div key={id} className={classNames('row', { activeFlex: value.match })}>
          <div className="col clickable">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                onChange={() =>
                  toggleSelectedValue({
                    context: context.name,
                    dimension: dimension.name,
                    value: value.name,
                  })
                }
                checked={value.selected}
              />
              <span>{value.name}</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
