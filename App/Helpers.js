var changeCase = require('change-case');
var _ = require('lodash');

export function toSnakeCase(str) {
    return changeCase.snakeCase(str);
}

// update each property name in an object into snake_case
// NOTE: doesn't work for nested/deep object structures
export function parameterizeObjectProperties(obj) {
    var parameterizedObject = _.mapKeys(obj, function(value, key) {
      return toSnakeCase(key);
    });
    return parameterizedObject;
}
