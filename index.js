const base62 = require('./base62');

const DEFAULT_OPTIONS = {
  propertyName: 'shortId'
};
const shortId = (schema, options) => {
  options = Object.assign(DEFAULT_OPTIONS, options);

  schema.virtual(options.propertyName).get(function() {
    return base62.encode(Buffer.from(this._id.toString(), 'hex'));
  });
};

module.exports = shortId;
