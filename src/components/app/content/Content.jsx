import React, { useMemo } from 'react';
import { useFilterWidget } from '../../../helpers/customHooks';
import { SELECTED_VALUES } from '../../../redux/filterWidget/constants';
import './content.scss';

const Content = () => {
  const { [SELECTED_VALUES]: selectedValues, cars } = useFilterWidget();

  const filteredCars = useMemo(() => {
    const results = cars.filter(({ parameters }) =>
      selectedValues.some(
        ({ context, dimension, value }) =>
          parameters[context] &&
          parameters[context][dimension] &&
          parameters[context][dimension] === value
      )
    );

    return (results.length ? results : cars).map(({ id, name, brand }, index) => (
      <li key={id} className="collection-item">
        {`${index + 1}. ${name} ${brand}`}
      </li>
    ));
  }, [cars, selectedValues]);

  return (
    <div className="content">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Cars</h4>
        </li>
        {filteredCars}
      </ul>
    </div>
  );
};

export default React.memo(Content);
