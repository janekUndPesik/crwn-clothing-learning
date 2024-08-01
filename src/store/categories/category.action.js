import { CATEGORIES_ATION_TYPES } from './category.type';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categoriesArray) => createAction(
  CATEGORIES_ATION_TYPES.SET_CATEGORIES,
  categoriesArray
);