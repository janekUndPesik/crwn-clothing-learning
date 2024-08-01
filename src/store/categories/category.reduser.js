import { CATEGORIES_ATION_TYPES } from "./category.type";

export const CATEGORIES_INITIAL_STATE = {
  categories: []
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
  ) => {
  const { type, payload } = action;

  switch(type) {
    case CATEGORIES_ATION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload};
    default:
      return state;
  }
};