var _ = require('lodash');

var localEnvVars = {
  TITLE:      'friendship',
  SAFE_TITLE: 'friendship'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
