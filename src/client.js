const fs = require('fs');
const coinbase = require('coinbase');

const utf8Encoding = {
  encoding: 'utf8',
};
const key = fs.readFileSync('./apikeys/key', utf8Encoding);
const secret = fs.readFileSync('./apikeys/secret', utf8Encoding);

const client = new coinbase.Client({
  apiKey: key,
  apiSecret: secret,
});

module.exports = client;
