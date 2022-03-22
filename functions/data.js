const data = require('./loginData.json')
const headers = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  "Access-Control-Allow-Methods": "POST"
}

exports.handler = async () =>
{
    return {
        body: JSON.stringify(data),
        statusCode: 200,
        headers: headers
    }
}