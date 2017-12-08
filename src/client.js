const fs = require('fs');
const path = require('path');
const coinbase = require('coinbase');

const utf8Encoding = { encoding: 'utf8' };
const defaultKeyPath = path.join('apikeys', 'key');
const defaultSecretPath = path.join('apikeys', 'secret');

module.exports = ({ keyPath = defaultKeyPath, secretPath = defaultSecretPath }) => {
  const key = fs.readFileSync(keyPath, utf8Encoding);
  const secret = fs.readFileSync(secretPath, utf8Encoding);

  return new coinbase.Client({
    apiKey: key,
    apiSecret: secret,
  });
};
