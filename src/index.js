const base62 = require('./base62');

const DEFAULT_OPTIONS = {
  propertyName: 'shortId'
};

function encode(mongoId) {
  return base62.encode(Buffer.from(mongoId.toString(), 'hex'));
}

function decode(shortId) {
  return base62.decode(shortId).toString('hex');
}

function shortId(schema, options) {
  options = Object.assign(DEFAULT_OPTIONS, options);

  schema.virtual(options.propertyName).get(function() {
    return encode(this._id);
  });
}

module.exports = shortId;
module.exports.encode = encode;
module.exports.decode = decode;
