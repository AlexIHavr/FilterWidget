import React from 'react';
import { useFilterWidget } from '../../../helpers/customHooks';
import { getUniqueFilters } from '../../../helpers/filterHelpers';
import './content.scss';

const Content = () => {
  const { selectedValues } = useFilterWidget();

  return (
    <div className="content">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Cars</h4>
        </li>
        {getUniqueFilters(selectedValues, 'name').map(({ id, name, brand }, index) => (
          <li key={id} className="collection-item">
            {`${index + 1}. ${name} ${brand}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Content);
