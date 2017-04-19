module.exports = {
  extends: [
    'angular'
  ],
  rules: {
    'angular/no-service-method': 0,
    "angular/window-service": 0,
    "no-console": 0,
    "angular/log": 0,
    "prefer-const": 0,
    "space-before-function-paren": ["error", "always"],
    "linebreak-style": 0,
    "no-unused-vars": 1
  },
  globals: {
    lodash: false,
    _: false,
    angular: false,
    URI: false
  }
}
