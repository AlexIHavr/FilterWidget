import { createAction } from 'redux-actions';
import {
  SET_MATCH_VALUES,
  SET_SEARCH_STRING,
  SET_SEARCH_TYPE,
  SET_SELECTED_ALL_VALUES,
  TOGGLE_ALPHABET_SORT,
  TOGGLE_SELECTED_FILTER,
} from './types';

export const toggleAlphabetSort = createAction(TOGGLE_ALPHABET_SORT);
export const toggleSelectedFilter = createAction(TOGGLE_SELECTED_FILTER);
export const setSelectedAllValues = createAction(SET_SELECTED_ALL_VALUES);
export const setMatchValues = createAction(SET_MATCH_VALUES);
export const setSearchString = createAction(SET_SEARCH_STRING);
export const setSearchType = createAction(SET_SEARCH_TYPE);
