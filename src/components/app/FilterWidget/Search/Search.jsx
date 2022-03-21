import React from 'react';
import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { SEARCH_TYPES } from './constants';
import './search.scss';
import { filterBySearchType } from '../../../../helpers/filterHelpers';
import { useDispatch } from 'react-redux';
import {
  setSearchString,
  setSearchType,
  toggleAlphabetSort,
} from '../../../../redux/FilterWidget/actions';
import { useFilterWidget } from '../../../../helpers/customHooks';

const Search = () => {
  const dispatch = useDispatch();

  const { searchType, alphabetSort } = useFilterWidget();

  const [selectSearchTypes, setSelectSearchTypes] = useState(false);

  const setSearchTypeOnClick = useCallback(
    (type) => {
      setSelectSearchTypes(false);
      dispatch(setSearchType(type));
      filterBySearchType();
    },
    [setSelectSearchTypes]
  );

  const getSelectSearchTypes = useCallback(() => {
    return !selectSearchTypes ? (
      <div
        className={classNames('clickable', searchType)}
        onClick={() => setSelectSearchTypes(true)}
      >
        {SEARCH_TYPES.find(({ type }) => type === searchType).symbol}
      </div>
    ) : (
      [
        SEARCH_TYPES.find(({ type }) => type === searchType),
        ...SEARCH_TYPES.filter(({ type }) => type !== searchType),
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

  const searchOnChange = useCallback(
    (e) => {
      dispatch(setSearchString(e.target.value.trim()));
      filterBySearchType();
    },
    [setSearchString, filterBySearchType]
  );

  const toggleAlphabetSortOnClick = useCallback(
    () => dispatch(toggleAlphabetSort(!alphabetSort)),
    [alphabetSort]
  );

  return (
    <div className="search row">
      <div className="row">
        <div className="col">
          <form className="filterForm" onSubmit={(e) => e.preventDefault()}>
            <button className="btn" type="submit">
              <i className="material-icons clickable">search</i>
            </button>
            <input className="searchString" type="text" onChange={searchOnChange} />
          </form>
        </div>
      </div>
      <div className="row sorts">
        <div className="col matches">{getSelectSearchTypes()}</div>
        <div className="col alphabet">
          <span className="clickable" onClick={toggleAlphabetSortOnClick}>
            A-Z
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Search);
