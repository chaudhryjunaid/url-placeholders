const assign = require('lodash.assign');
const replace = require('lodash.replace');
const reduce = require('lodash.reduce');

module.exports = function urlPlaceholders(_options) {
  var options = _options || {};
  // {defaults = null, prefix = ':', postfix=''}
  if (!options.defaults) {
    options.defaults = null;
  }
  if (!options.prefix) {
    options.prefix = ':';
  }
  if (!options.postfix) {
    options.postfix = '';
  }
  return function interpolate(url, _locals) {
    if (arguments.length === 1 && !options.defaults) {
      return interpolate.bind(null, url);
    }

    const locals = assign({}, options.defaults, _locals);
    return reduce(locals, function(acc, val, key) {
      if (!val) {
        return acc;
      }
      const toReplace = options.prefix + key + options.postfix;
      const replaceBy = val;
      return replace(acc, toReplace, replaceBy);
    }, url);
  };
};
