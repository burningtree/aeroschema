Baby = require 'babyparse'
request = require 'request'

url = 'http://www.caa.co.uk/' +
  'docs/80/airport_data/2014Annual/Table_04_1_Air_Transport_Movements_2014.csv'

request url, (req, res, body) ->
  parsed = Baby.parse body,
    header: true
  console.log parsed
