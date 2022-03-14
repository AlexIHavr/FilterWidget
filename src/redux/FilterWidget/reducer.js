import { EXACT } from '../../components/app/FilterWidget/Search/constants';
import { SET_SEARCH_TYPE, TOGGLE_ALPHABET_SORT } from './types';

const initialState = {
  alphabetSort: false,
  searchType: EXACT,
};

const filterWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALPHABET_SORT:
      return { ...state, alphabetSort: !state.alphabetSort };
    case SET_SEARCH_TYPE:
      return { ...state, searchType: action.payload };
    default:
      return state;
  }
};

export default filterWidgetReducer;
