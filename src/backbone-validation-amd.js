(function (factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require('lodash'));
  } else if (typeof define === 'function' && define.amd) {
    define(['lodash'], factory);
  }
}(function (_) {
  //= backbone-validation.js
  return Validation;
}));
