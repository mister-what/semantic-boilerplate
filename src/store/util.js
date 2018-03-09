import { snakeCase } from "lodash";

export const makePrefixedActionTypes = (prefix = "", ...typeNames) => typeNames.reduce((prefixedTypeNames, typeName) => {
  prefixedTypeNames[ typeName ] = snakeCase(prefix).toUpperCase() + "__" + snakeCase(typeName || "").toUpperCase();
  return prefixedTypeNames;
}, {});

export const makeActionCreator = (typeName, ...paramNames) => (...params) => paramNames.reduce((action, paramName, index) => {
  action[paramName] = params[index];
  return action;
}, {type: typeName});
