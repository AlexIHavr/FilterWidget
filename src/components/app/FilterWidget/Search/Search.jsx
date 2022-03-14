import React from 'react';
import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { SEARCH_TYPES } from './constants';
import './search.scss';

const Search = ({ state, setSearchType, toggleAlphabetSort }) => {
  const [selectSearchTypes, setSelectSearchTypes] = useState(false);

  const setSearchTypeOnClick = useCallback(
    (type) => {
      setSelectSearchTypes(false);
      setSearchType(type);
    },
    [setSelectSearchTypes]
  );

  const getSelectSearchTypes = useCallback(() => {
    return !selectSearchTypes ? (
      <div
        className={classNames('clickable', state.searchType)}
        onClick={() => setSelectSearchTypes(true)}
      >
        {SEARCH_TYPES.find(({ type }) => type === state.searchType).symbol}
      </div>
    ) : (
      [
        SEARCH_TYPES.find(({ type }) => type === state.searchType),
        ...SEARCH_TYPES.filter(({ type }) => type !== state.searchType),
      ].map(({ type, symbol }) => (
        <div
          key={type}
          className={classNames(type, 'clickable')}
          onClick={() => setSearchTypeOnClick(type)}
        >
          {symbol}
        </div>
      ))
    );
  }, [selectSearchTypes]);

  return (
    <div className="search row">
      <div className="row">
        <div className="col">
          <form className="filterForm" onSubmit={(e) => e.preventDefault()}>
            <button className="btn" type="submit">
              <i className="material-icons clickable">search</i>
            </button>
            <input className="searchString" type="text" />
          </form>
        </div>
      </div>
      <div className="row sorts">
        <div className="col matches">{getSelectSearchTypes()}</div>
        <div className="col alphabet">
          <span className="clickable" onClick={() => toggleAlphabetSort(!state.alphabetSort)}>
            A-Z
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Search);
