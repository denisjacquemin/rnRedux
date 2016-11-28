// @flow
import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchRecipes = createReducer({}, {

});

export const recipeCount = createReducer({ count: 0}, {
  [types.ADD_RECIPE](state, action) {
    return {count: state.count + 10};
  }
});
