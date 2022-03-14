import { createAction } from 'redux-actions';
import { SET_SEARCH_TYPE, TOGGLE_ALPHABET_SORT } from './types';

export const setSearchType = createAction(SET_SEARCH_TYPE);
export const toggleAlphabetSort = createAction(TOGGLE_ALPHABET_SORT);
