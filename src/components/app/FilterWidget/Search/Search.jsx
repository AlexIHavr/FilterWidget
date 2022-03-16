import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { EXACT, PARTIAL, SEARCH_TYPES, STARTS_WITH } from './constants';
import './search.scss';

const Search = ({ state, toggleAlphabetSort, setMatchValues }) => {
  const [searchType, setSearchType] = useState(EXACT);
  const [selectSearchTypes, setSelectSearchTypes] = useState(false);
  const [searchString, setSearchString] = useState(null);

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

  useEffect(() => {
    if (searchString === null) return;

    const filterValues = state.filters.filter(
      ({ context, dimension }) => context.selected && dimension.selected
    );

    if (!searchString) return setMatchValues(filterValues);

    switch (searchType) {
      case EXACT:
        setMatchValues(filterValues.filter(({ value: { name } }) => String(name) === searchString));
        break;
      case PARTIAL:
        setMatchValues(
          filterValues.filter(({ value: { name } }) => String(name).includes(searchString))
        );
        break;
      case STARTS_WITH:
        setMatchValues(
          filterValues.filter(({ value: { name } }) => String(name).startsWith(searchString))
        );
        break;
    }
  }, [searchString, searchType]);

  return (
    <div className="search row">
      <div className="row">
        <div className="col">
          <form className="filterForm" onSubmit={(e) => e.preventDefault()}>
            <button className="btn" type="submit">
              <i className="material-icons clickable">search</i>
            </button>
            <input
              className="searchString"
              type="text"
              onChange={(e) => setSearchString(e.target.value.trim())}
            />
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

export default Search;
