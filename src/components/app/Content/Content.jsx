import React from 'react';
import { getUniqueFilters } from '../../../helpers/filterHelpers';
import './content.scss';

const Content = ({ filters }) => {
  return (
    <div className="content">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Cars</h4>
        </li>
        {getUniqueFilters(
          filters.filter(
            ({ context, dimension, value }) =>
              context.selected && dimension.selected && value.selected
          )
        ).map(({ id, name, brand }, index) => (
          <li key={id} className="collection-item">
            {`${index + 1}. ${name} ${brand}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Content);
