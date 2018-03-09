import { createReducer } from "redux-create-reducer";
import {makePrefixedActionTypes, makeActionCreator} from "../util";
import produce from "immer";

const plainActionNames = [
  "replace",
  "merge"
];

export const actions = makePrefixedActionTypes("someSubState", ...plainActionNames);

export const actionCreators = {
  merge: makeActionCreator(actions.merge, "changes"),
  replace: makeActionCreator(actions.replace, "replacement")
};

export const someStateSlice = createReducer({}, {
  [actions.merge]: (state = {}, { changes = {} }) => produce(state, draftState => {
    Object.keys(changes).forEach(changeKey => draftState[changeKey] = changes[changeKey]);
  }),
  [actions.replace]: (state, {replacement = {}}) => replacement
});
