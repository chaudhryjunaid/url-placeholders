const assign = require('lodash.assign');
const replace = require('lodash.replace');
const reduce = require('lodash.reduce');

module.exports = function urlPlaceholders({defaults = null, prefix = ':', postfix=''} = {}) {
  return function interpolate(url, _locals) {
    if (arguments.length === 1 && !defaults) {
      return interpolate.bind(null, url);
    }

    const locals = assign({}, defaults, _locals);
    return reduce(locals, (acc, val, key) => {
      if (!val) {
        return acc;
      }
      const toReplace = `${prefix}${key}${postfix}`;
      const replaceBy = `${val}`;
      return replace(acc, toReplace, replaceBy);
    }, url);
  };
};
