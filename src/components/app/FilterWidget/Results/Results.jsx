import classNames from 'classnames';
import { useEffect, useState } from 'react';

const Results = ({ state, toggleSelectedValue, setSelectedAllValues }) => {
  const [selectAll, setSelectAll] = useState(false);

  const values = state.filters
    .filter(({ selected }) => selected)
    .reduce(
      (filters, { dimensions, context }) => [
        ...filters,
        ...dimensions
          .filter(({ selected }) => selected)
          .reduce(
            (allValues, { dimension, values }) => [
              ...allValues,
              ...values.map((value) => ({ ...value, dimension, context })),
            ],
            []
          ),
      ],
      []
    );

  useEffect(() => {
    setSelectedAllValues(selectAll);
  }, [selectAll]);

  return (
    <div className={classNames('results row', { active: values.length })}>
      <div className="row">
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

      {values.map(({ value, context, dimension, selected }) => (
        <div key={context + dimension + value} className="row">
          <div className="col clickable">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                onChange={() => toggleSelectedValue({ context, dimension, value })}
                checked={selected}
              />
              <span>{value}</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
